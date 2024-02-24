import { useEffect, useState } from "react";

function Timer({ duration }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const formattedTime = (millisecond) => {
    let total_sec = parseInt(Math.floor(millisecond / 1000));
    let total_mins = parseInt(Math.floor(total_sec / 60));
    let total_hrs = parseInt(Math.floor(total_mins / 60));
    let total_days = parseInt(Math.floor(total_hrs / 24));

    let seconds = parseInt(total_sec % 60);
    let minutes = parseInt(total_mins % 60);
    let hours = parseInt(total_hrs % 24);

    return `${total_days}: ${hours} : ${minutes}: ${seconds}`;
  };

  return (
    <div className="bg-sky-400 h-screen flex items-center justify-center text-7xl">
      {formattedTime(time)}
    </div>
  );
}

export default Timer;
