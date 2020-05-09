import React from "react";
import "./ToDoListItem.css";

interface ToDoListItemProps {
  todo: ToDo;
}

export const ToDoListItem: React.FC<ToDoListItemProps> = ({ todo }) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input type="checkbox" checked={todo.complete}></input>
        {todo.text}
      </label>
    </li>
  );
};
