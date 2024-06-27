import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [inputText, setInputText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      addTodo(inputText, dueDate); // Pass dueDate to addTodo
      setInputText('');
      setDueDate(''); // Clear dueDate after adding todo
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Enter new task"
      />
      <input
        type="date"
        value={dueDate}
        onChange={handleDueDateChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTodo;
