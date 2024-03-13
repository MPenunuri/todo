import { Component } from "react";
import AddTaskTool from "./TodoList/AddTaskTool.jsx";
import Tasks from "./TodoList/Tasks.jsx";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  render() {
    return (
      <>
        <AddTaskTool
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
        <h2>Your tasks:</h2>
        <Tasks />
      </>
    );
  }
}

export default TodoList;
