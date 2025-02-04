type AddToDo = (newToDo: string) => void;

// Type alias with two properties. Text of type string for user input, and complete of type boolean to toggle if todo item is completed.
type ToDo = {
    text: string;
    complete: boolean;
}

type ToggleComplete = (selectedToDo: Todo) => void;