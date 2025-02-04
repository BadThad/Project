import React from "react";
import { ToDoListItem } from "./ToDoListItem";

interface ToDoListProps {
    todos: Array<ToDo>
    toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<ToDoListProps> = ({todos, toggleComplete}) => {
    return (
      <ul>
        {todos.map((todo) => (
          <ToDoListItem
            key={todo.text}
            todo={todo}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    );
}