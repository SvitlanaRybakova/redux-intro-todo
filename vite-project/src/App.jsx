import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";
import "./App.css";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

function App() {
  const [text, setText] = useState("");
  // trigers action
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };
 
  return (
    <div className="App">
      <InputField text={text} handleSubmit={addTask} handleInput={setText} />

      <TodoList />
    </div>
  );
}

export default App;
