type ToDo = {
  text: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: ToDo) => void;

type AddNewTodo = (newTodo: string) => void;
