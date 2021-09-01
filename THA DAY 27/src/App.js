import "./App.css";
import AddTodo from "./components/todo";
import ListTodo from "./components/list";
export default function App(){
  return (
    <div className="App">
      <h1>Todo List </h1>
      <AddTodo />
      <ListTodo />
    </div>
  );
}