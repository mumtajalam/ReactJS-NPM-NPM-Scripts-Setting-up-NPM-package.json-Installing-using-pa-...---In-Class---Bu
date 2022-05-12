import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [show, setShow] = useState(false);
  const showFn = () => {
    setShow(true);
  };
  return (
    <>
      <button id="click" onClick={showFn}>
        Show
      </button>
      {show && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
    </>
  );
}

export default App;
