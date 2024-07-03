import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';

const TodoDetails = ({ todos, setTodos }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = todos[id];

  const handleDelete = () => {
    const newTodos = todos.filter((_, index) => index !== parseInt(id));
    setTodos(newTodos);
    navigate('/');
  };

  if (!todo) {
    return <p>Todo not found</p>;
  }

  return (
    <div className="todo-details-container">
      <IoMdArrowRoundBack className="back-icon" onClick={() => navigate('/')} />
      <div className="top-right-icons">
        <MdDeleteForever className="delete-icon" onClick={handleDelete} />
        <Link to={`/update/${id}`}>
          <FaRegEdit className="edit-icon" />
        </Link>
      </div>
      <h1>Todo Details</h1>
      <h2>{todo.name}</h2>
      <p className="todo-description">{todo.description}</p>
    </div>
  );
};

export default TodoDetails;
