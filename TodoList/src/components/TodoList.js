import React from 'react';
import { Link } from 'react-router-dom';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { MdDeleteForever } from 'react-icons/md';

const TodoList = ({ todos, setTodos }) => {
  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div className="todo-form">
        <Link to="/add">
          <button className="todo-button">Add Todo</button>
        </Link>
      </div>
      <div className="todo-container">
        {todos.map((todo, index) => (
          <div key={index} className={`todo-row ${todo.completed ? 'complete' : ''}`}>
            <Link to={`/details/${index}`} className="todo-text">{todo.name}</Link>
            <div className="icons">
              <IoCheckmarkCircleOutline
                onClick={() => handleComplete(index)}
                className="complete-icon"
              />
              <MdDeleteForever
                onClick={() => handleDelete(index)}
                className="delete-icon"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
