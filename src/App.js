import React from 'react';
import { useEffect, useRef, useState } from 'react';
import './style.css';
function App() {
  const [todos, setTodos] = useState([]);

  const todoText = useRef();

  useEffect(() => {
    const existe = localStorage.getItem('todos');
    setTodos(existe ? JSON.parse(existe) : []);
  }, []);

  function addTodo(event) {
    if (todoText) {
      event.preventDefault();
      const next = [...todos, todoText.current.value];
      setTodos(next);
      localStorage.setItem('todos', JSON.stringify(next));
    }
  }
  function deleteTodo(event) {
    event.preventDefault();
    setTodos([]);

    localStorage.setItem('todos', JSON.stringify([]));
  }

  // function addTodo(e) {
  //   e.prevent.value;
  //   setTodos((preValue) => {
  //     return [...preValue, e];
  //   });
  // }

  // function deleteTodo(id) {
  //   setTodos((preValue) => {
  //     return [...preValue.filter((todos, index) => index !== id)];
  //   });
  // }
  return (
    <div className="App">
      <ul>
        {todos.map((todo, i) => (
          <div>
            <li key={i}>{todo}</li>
          </div>
        ))}
      </ul>
      <input type="text" placeholder="What needs to be done?" ref={todoText} />
      <div className="forms">
        <form onSubmit={addTodo} className="add">
          <input type="submit" value="Add Todo" />
        </form>
        <form onSubmit={deleteTodo} className="remove">
          <input type="submit" value="Remove All todos" />
        </form>
      </div>
    </div>
  );
}

export default App;
