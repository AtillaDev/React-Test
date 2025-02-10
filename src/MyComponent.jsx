import { useState, useEffect, useRef } from "react";

function MyComponent() {
  let inputRef = useRef(null);

  useEffect(() => {
    console.log("Component Rendered");
    console.log(inputRef);
  });

  function handleClick() {
    // num.current++;
    inputRef.current.focus();
    inputRef.current.style.backgroundColor === "green"
      ? (inputRef.current.style.backgroundColor = "red")
      : (inputRef.current.style.backgroundColor = "green");
    // console.log(inputRef);
  }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <input type="text" ref={inputRef} />
    </>
  );
}

export default MyComponent;
