import { useState, useEffect } from "react";

function DigitalClock() {
  //   while (1) {
  const [time, setTime] = useState(new Date());
  // console.log(newDate);
  //   }
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      document.title = new Date().toLocaleTimeString();
    }, 1000);
    return () => clearInterval(interval);
  });

  return <div>{time.toLocaleTimeString()}</div>;
}

export default DigitalClock;
