import React from "react";
import "./ToDoListItem.css";

interface ToDoListItemProps {
  todo: ToDo;
  toggleTodo: ToggleTodo;
}

export const ToDoListItem: React.FC<ToDoListItemProps> = ({
  todo,
  toggleTodo,
}) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        ></input>

        <span>{todo.text}</span>
      </label>
    </li>
  );
};
