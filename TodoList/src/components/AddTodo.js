import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTodo = ({ setTodos }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos(prevTodos => [...prevTodos, { name, description, completed: false }]);
    navigate('/');
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit} className="edit-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Todo name"
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
        <button type="submit" className="todo-button edit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
