import React, { useState, ChangeEvent, FormEvent } from "react";

interface ToDoFormProps {
    addToDo: AddToDo;
}

const ToDoForm: React.FC<ToDoFormProps> = ({addToDo}) => {
    const [newToDo, setNewToDo] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewToDo(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addToDo(newToDo);
        setNewToDo("");
    }

    return (
      <>
        <form className="todo-form">
          <input
            type="text"
            value={newToDo}
            className="todo-input"
            placeholder="Something todo"
            onChange={handleChange}
          />
        </form>
        <button type="submit" className="sumbit-todo-btn" onClick={handleSubmit}>
        Add your ToDo
        </button>
      </>
    );

};

export default ToDoForm;