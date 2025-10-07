import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    if (text.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    if (window.confirm("Yakin ingin menghapus semua tugas yang selesai?")) {
      setTodos(todos.filter((todo) => !todo.completed));
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="app-container">
      <h1>Catat Goal Harianmu!!</h1>
      <TodoForm addTodo={addTodo} />
      <TodoFilter
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      {todos.length === 0 && <p className="empty">Belum ada tugas 🥹</p>}
    </div>
  );
}

export default App;
