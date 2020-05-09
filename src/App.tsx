import React from "react";
import { ToDoListItem } from "./ToDoListItem";

const todos: [ToDo, ToDo] = [
  { text: "learn typescript", complete: true },
  { text: "take a shower", complete: false },
];

const App: React.FC = () => {
  return (
    <React.Fragment>
      <ToDoListItem todo={todos[0]} />
      <ToDoListItem todo={todos[1]} />
    </React.Fragment>
  );
};

export default App;
