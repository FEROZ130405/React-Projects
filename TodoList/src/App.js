import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import TodoDetails from './components/TodoDetails';
import UpdateTodo from './components/UpdateTodo';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-app">
      <Router>
        <Routes>
          <Route path="/" element={<TodoList todos={todos} setTodos={setTodos} />} />
          <Route path="/add" element={<AddTodo setTodos={setTodos} />} />
          <Route path="/details/:id" element={<TodoDetails todos={todos} setTodos={setTodos} />} />
          <Route path="/update/:id" element={<UpdateTodo todos={todos} setTodos={setTodos} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;