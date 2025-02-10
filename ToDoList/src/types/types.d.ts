type AddToDo = (newToDo: string) => void;

type RemoveToDo = (todoToRemove: Todo) => void;

type EditToDo = (todoToEdit: Todo) => void;

// Type alias with two properties. Text of type string for user input, and complete of type boolean to toggle if todo item is completed.
type ToDo = {
    text: string;
    complete: boolean;
}

type ToggleComplete = (selectedToDo: Todo) => void;

type Option =  {
    value: string;
    onClick: () => void;
    color?: string;
}