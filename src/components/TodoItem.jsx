import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
        Hapus
      </button>
    </div>
  );
}

export default TodoItem;
