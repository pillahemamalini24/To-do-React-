import React, { useState } from 'react';

function TodoItem({ todo, index, toggleTodo, deleteTodo, editTodo }) {
  const [dueDate, setDueDate] = useState('');

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleEdit = () => {
    editTodo(index, todo.text, todo.priority, dueDate); // Pass dueDate to editTodo
  };

  return (
    <div className="todo" style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
      <span>{todo.text}</span>
      <select value={todo.priority} onChange={(e) => editTodo(index, todo.text, e.target.value, dueDate)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input type="date" value={dueDate} onChange={handleDueDateChange} />
      <button onClick={() => toggleTodo(index)}>Toggle</button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default TodoItem;
