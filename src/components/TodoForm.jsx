import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Goal kamu hari ini??"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default TodoForm;
