import React, { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import NavBar from './components/NavBar';

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || [],
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <NavBar setTodos={setTodos} />
      <AddTodo todos={todos} setTodos={setTodos} />
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} todos={todos} setTodos={setTodos} todo={todo} />
        );
      })}
    </div>
  );
}

export default App;
