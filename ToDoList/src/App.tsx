import './App.css';
import React, {useState} from 'react';
import ToDoForm from './components/ToDoForm';
import { TodoList } from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState<Array<ToDo>>([]);

  const addTodo: AddToDo = newToDo => {
    if (newToDo !== "") {
      setTodos([...todos, {text: newToDo, complete: false}]);
    }
  };

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo =>{
      if (todo === selectedTodo) {
        return {...todo, complete: !todo.complete};
      }
      return todo
    });
    setTodos(updatedTodos);
  }

  return (
    <div className='App'>
      <h1>ToDo list</h1>
      <ToDoForm addToDo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete}/>
    </div>
  )
}

export default App
