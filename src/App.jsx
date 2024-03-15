import { Component } from "react";
import Todolist from "./TodoList.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Todo list</h1>
        </header>
        <main>
          <Todolist />
        </main>
        <footer>Front-end project by MPenunuri.</footer>
      </>
    );
  }
}

export default App;
