import React, { useState } from "react";

function Todoform(props) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
        id:Math.floor(Math.random()*10000),
        text:input
   
    })
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        name="text"
        value={input}
        className="todo-input"
        placeholder="add your todo"
        onChange={handleChange}
      ></input>
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default Todoform;
