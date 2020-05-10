import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddTodoFormProps {
  addTodo: AddNewTodo;
}
export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };
  return (
    <form>
      <input
        type="text"
        value={newTodo}
        onChange={handleChange}
        style={{ fontSize: "18px", marginRight: "10px" }}
      />

      <button type="submit" onClick={handleSubmit} style={{ fontSize: "18px" }}>
        Add Todo
      </button>
    </form>
  );
};
