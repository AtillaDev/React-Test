import { useState, useEffect } from "react";

function MyComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED");
    };
  }, []);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  // useEffect(() => {
  //   setWidth(window.innerWidth);
  //   setHeight(window.innerHeight);
  // }, [window.innerWidth, window.innerHeight]);

  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Height width: {height}px</p>
    </div>
  );
}

export default MyComponent;
