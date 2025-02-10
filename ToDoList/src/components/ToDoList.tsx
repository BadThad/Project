import React from "react";
import { ToDoListItem } from "./ToDoListItem";

interface ToDoListProps {
    todos: Array<ToDo>
    toggleComplete: ToggleComplete;
    onRemoveTodo: RemoveToDo;
    onEditTodo: EditToDo;
}

export const TodoList: React.FC<ToDoListProps> = ({todos, toggleComplete, onRemoveTodo, onEditTodo}) => {
    return (
      <ul>
        {todos.map((todo) => (
          <ToDoListItem
            key={todo.text}
            todo={todo}
            toggleComplete = {toggleComplete}
            onRemoveTodo = {onRemoveTodo}
            onEditTodo = {onEditTodo}
          />
        ))}
      </ul>
    );
}