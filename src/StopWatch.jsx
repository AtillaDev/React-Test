import React, { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsrunning] = useState(false);
  const intervalIdRef = useRef(null);
  const startTImeRef = useRef(0);
  // const [time, setTime] = useState(new Date());

  // console.log(newDate);
  //   }
  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTImeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function startTime() {
    setIsrunning(true);
    startTImeRef.current = Date.now() - elapsedTime;
    // console.log(startTImeRef);
  }

  function stopTime() {
    setIsrunning(false);
    console.log("stoped");
    clearInterval(intervalIdRef.current);
    // intervalIdRef.current = null;
  }

  function resetTime() {
    setElapsedTime(0);
    setIsrunning(false);
    // clearInterval(intervalIdRef);
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minute = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let miliSeconds = Math.floor((elapsedTime % 1000) / 10);

    minute = String(minute).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliSeconds = String(miliSeconds).padStart(2, "0");

    return `${minute}:${seconds}:${miliSeconds}`;
  }

  return (
    <div>
      <h1>{formatTime()}</h1>
      <button onClick={startTime}>Start</button>
      <button onClick={stopTime}>Pause</button>
      <button onClick={resetTime}>Reset</button>
    </div>
  );
}

export default StopWatch;
