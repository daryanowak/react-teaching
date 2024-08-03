import { useState } from "react";

export const WithState = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClickThree = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <button onClick={handleClick}>+1 clicked {count} times</button>
      <button onClick={handleClickThree}>+3 clicked {count} times</button>
    </>
  );
};
