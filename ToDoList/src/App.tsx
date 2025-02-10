import './App.css';
import {useState} from 'react';
import ToDoForm from './components/ToDoForm';
import { TodoList } from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState<Array<ToDo>>([]);

  const addTodo: AddToDo = (newToDo) => {
    if (newToDo !== "") {
      setTodos([...todos, { text: newToDo, complete: false }]);
    }
  };

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeToDo: RemoveToDo = todoToRemove => {
    const updatedTodos: Array<ToDo> = todos.filter(todo => todo.text != todoToRemove.text);
    setTodos(updatedTodos)
  }

  const editToDo: EditToDo = todoToEdit => {
    const todoToUpdateIndex: number = todos.findIndex(todo => todo.text == todoToEdit.text)
    console.log(todoToUpdateIndex)
  }

  return (
    <div className="App">
      <h1>ToDo list</h1>
      <ToDoForm addToDo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} onRemoveTodo={removeToDo} onEditTodo={editToDo} />
    </div>
  );
}

export default App
