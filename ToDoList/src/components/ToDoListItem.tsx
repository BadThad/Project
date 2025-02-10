import React, {useState} from "react";
import {Dropdown} from "./Dropdown";

interface ToDoListItemProps {
    todo: ToDo;
    toggleComplete: ToggleComplete;
    onRemoveTodo: RemoveToDo;
    onEditTodo: EditToDo;
}

export const ToDoListItem: React.FC<ToDoListItemProps> = ({todo, toggleComplete, onRemoveTodo, onEditTodo}) => {

    const [isEditOn, setIsEditOn] = useState<boolean>(false);
    const [inputText, setInputText] =useState<string>(todo.text);

    const onDelete = () => {
        onRemoveTodo(todo);
    }

    const onEdit = () => {
        onEditTodo(todo);
        setIsEditOn(true);  
    }

    const onTodoUpdate = (e:any) => {
        const text = e.target.value;
        setInputText(text);
        onEditTodo(text);
    }

    const dropdownOptions: Array<Option> = [
        {
            value: "Delete",
            onClick: onDelete,
            color: "red"
        },
        {
            value: "Edit",
            onClick: onEdit,
            color: "blue"
        }
    ]

    return (
      <li>
        <label className={todo.complete ? "todo-row-completed" : "todo-row"}>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        {isEditOn ? <input type="text" value={inputText} onChange={(e) => onTodoUpdate(e)} /> : todo.text}
        </label>
        <Dropdown
            options={dropdownOptions}
        />
      </li>
    );
}