import React from 'react';
import TodoItem from './TodoItem'; // Adjust the import path as needed

function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
