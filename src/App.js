import './App.css';
import TodoList from './Components/TodoList/TodoList';
import AddTodo from './Components/AddTodo/AddTodo';

function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <AddTodo />
    <TodoList />
    </div>
  );
}

export default App;