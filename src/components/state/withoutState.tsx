import { MouseEvent } from "react";

export const WithoutState = () => {
  let count = 0;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    count++;
    console.log({ count });
  };

  return (
    <>
      <button onClick={handleClick}>clicked {count} times</button>
    </>
  );
};
