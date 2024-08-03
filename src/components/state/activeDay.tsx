import { useState } from "react";

const days = ["25.07", "26.07", "27.07", "28.07", "29.07"];

export const ActiveDay = () => {
  const [activeDay, setActiveDay] = useState(0);
  const lastIndex = days.length - 1;

  return (
    <>
      {days.map((day, i) => {
        if (i === activeDay) return <h1 key={i}>{day}</h1>;
        else {
          return <p key={i}>{day}</p>;
        }
      })}

      <div className="card">
        <button
          disabled={activeDay <= 0}
          onClick={() => setActiveDay((day) => day - 1)}
        >
          go to the previous day
        </button>
        <button
          disabled={activeDay >= lastIndex}
          onClick={() => setActiveDay((day) => day + 1)}
        >
          go to the next day
        </button>
      </div>
    </>
  );
};
