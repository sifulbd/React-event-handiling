import React, { useState, useEffect } from "react";

function Photos() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/")
      .then((res) => res.json())
      .then((data) => setPhotos(data.slice(0, 8)));
  }, []);
  return (
    <div className="photos-container" style={{ display: "block" }}>
      <ul style={{ marginBottom: "30px" }}>
        {photos.map((photo) => {
          return (
            <li style={{ float: "left", width: "300px" }}>
              <h2>{photo.title}</h2>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <p>
                <a href={photo.url}> View Image </a>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Photos;
