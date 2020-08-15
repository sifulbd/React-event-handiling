import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseEvent() {
    setHeadingText("submitted df");
  }

  function onMouseover() {
    setMouseOver(true);
  }

  function onMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input id="ip" type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={onMouseover}
        onMouseOut={onMouseOut}
        onClick={handleMouseEvent}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
