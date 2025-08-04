import React, { useState } from 'react';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  // Add task
  const addTask = () => {
    const trimmedTask = task.trim();
    if (trimmedTask) {
      const newTodos = [...todos, trimmedTask];
      // Sort in ascending order
      newTodos.sort();
      setTodos(newTodos);
      setTask(''); // Clear input field
    }
  };

  // Delete task
  const deleteTask = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos.sort());
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Todo List App</h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;