import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateTodo = ({ todos, setTodos }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = todos[id];
  const [name, setName] = useState(todo ? todo.name : '');
  const [description, setDescription] = useState(todo ? todo.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTodos = todos.map((todo, index) =>
      index === parseInt(id) ? { ...todo, name, description } : todo
    );
    setTodos(updatedTodos);
    navigate('/');
  };

  if (!todo) {
    return <p>Todo not found</p>;
  }

  return (
    <div>
      <h1>Update Todo</h1>
      <form onSubmit={handleSubmit} className="edit-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="todo-input edit"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="todo-input edit"
          required
        ></textarea>
        <button type="submit" className="todo-button edit">Update</button>
      </form>
    </div>
  );
};

export default UpdateTodo;
