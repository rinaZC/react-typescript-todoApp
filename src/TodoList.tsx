import React from "react";
import { ToDoListItem } from "./ToDoListItem";
import "./ToDoListItem.css";

interface TodoListProps {
  todos: ToDo[];
  toggleTodo: ToggleTodo;
}
export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((t) => {
        return <ToDoListItem key={t.text} todo={t} toggleTodo={toggleTodo} />;
      })}
    </ul>
  );
};
