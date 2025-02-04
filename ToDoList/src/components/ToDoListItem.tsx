import React from "react";

interface ToDoListItemProps {
    todo: ToDo;
    toggleComplete: ToggleComplete;
}

export const ToDoListItem: React.FC<ToDoListItemProps> = ({todo, toggleComplete}) => {
    return (
      <li>
        <label className={todo.complete ? "todo-row-completed" : "todo-row"} />
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        {todo.text}
      </li>
    );
}