import React, { useEffect, useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import "./TodoApp.css";

const initialTodos: ToDo[] = [
  { text: "learn typescript", complete: true },
  { text: "take a shower", complete: false },
];

const App: React.FC = () => {
  useEffect(() => {
    document.title = "Rina's Todo App";
  });
  const [todos, setTodo] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((td) => {
      if (td === selectedTodo) {
        return { ...td, complete: !td.complete };
      }
      return td;
    });
    setTodo(newTodos);
  };

  const AddTodo: AddNewTodo = (newTodo) => {
    const newTodoAdd: ToDo = {
      text: newTodo,
      complete: false,
    };
    newTodo.trim() !== "" && setTodo([...todos, newTodoAdd]);
  };

  return (
    <React.Fragment>
      <div className="app">
        <div className="appTitle">Rina's Todo App</div>
        <div className="content">
          <TodoList todos={todos} toggleTodo={toggleTodo} />

          <AddTodoForm addTodo={AddTodo} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
