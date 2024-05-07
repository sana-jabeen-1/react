import React, { useState, useEffect } from "react";
import axios from "axios";
import "./todos.css"; // Assuming the CSS file is named Todos.css

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");

  const getAllTodos = () => {
    axios
      .get("http://localhost:3001/api/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => console.error("Error fetching todos:", error));
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`http://localhost:3001/api/todos/${id}`, { status });
      getAllTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      // Create a new todo
      const newTodo = {
        title: newTodoTitle,
        description: newTodoDescription,
      };

      await axios.post("http://localhost:3001/api/todos", { ...newTodo });
      getAllTodos();

      // Reset the form fields after submission
      setNewTodoTitle("");
      setNewTodoDescription("");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/todos/${id}`);
      getAllTodos();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Todos</h1>
      <form className="form-input" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => (
        <div key={todo._id} className={`todo-list ${todo?.status}`}>
          <div className="top-bar">
            <h3>{todo.title}</h3>
            <h1
              onClick={() => {
                deleteTodo(todo._id);
              }}
              className="delete-icon"
            >
              X
            </h1>
          </div>
          <p>{todo.description}</p>
          <button
            onClick={() =>
              handleStatusChange(
                todo._id,
                todo.status === "TODO" ? "DONE" : "TODO"
              )
            }
          >
            {todo.status === "TODO" ? "Mark as Done" : "Mark as Todo"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
