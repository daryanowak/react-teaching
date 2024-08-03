import { ChangeEvent, useState } from "react";

const getTodos = () => {
  console.log("executing getTodos function");
  const jsonTodos = localStorage.getItem("todos");
  if (!jsonTodos) return [];
  return JSON.parse(jsonTodos);
};

export const InitializerFunction = () => {
  console.log("render");
  const [todos, setTodos] = useState<string[]>(getTodos);
  const [todo, setTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const saveTodo = () => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos, todo];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
    setTodo("");
    // localStorage.setItem("todos", JSON.stringify([...todos, todo]));
  };

  return (
    <>
      <div>
        {todos.map((task) => {
          return <p>{task}</p>;
        })}
      </div>
      <input type="text" value={todo} onChange={handleChange} />
      <button onClick={saveTodo}>ADD TODO</button>
    </>
  );
};
