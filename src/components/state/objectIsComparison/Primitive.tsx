import { ChangeEvent, useEffect, useState } from "react";

export const Primitive = () => {
  const [favColor, setFavColor] = useState("red");
  const [text, setText] = useState("");

  useEffect(() => {
    //does everything behaves normally here?
    console.log("Initial render or re-render caused by favColor change");
  }, [favColor]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
  };

  return (
    <>
      <h1>{favColor}</h1>
      <input value={text} onChange={handleChange} />
      <button onClick={() => setFavColor(text.trim())}>
        Update favorite color
      </button>
    </>
  );
};
