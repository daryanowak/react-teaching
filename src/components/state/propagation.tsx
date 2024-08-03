import { MouseEvent } from "react";

export const Propagation = () => {
  let count = 0;

  const handleNavigationClick = () => {
    console.log("Navigation");
  };

  const handleListClick = () => {
    console.log("ul list");
  };

  const handleListElementClick = () => {
    console.log("List element");
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    // e.stopPropagation();
    count++;
    console.log({ count });
  };

  return (
    <nav onClick={handleNavigationClick}>
      <ul onClick={handleListClick}>
        <li onClick={handleListElementClick}>
          <button onClick={handleClick}>button1</button>
        </li>
        <li>
          <button onClick={handleClick}>button2</button>
        </li>
      </ul>
    </nav>
  );
};
