import { Component } from "react";
import AddTaskTool from "./TodoList/AddTaskTool.jsx";
import Tasks from "./TodoList/Tasks.jsx";
import { handleInputChange, handleSubmit } from "./TodoList/addMethods.js";
import {
  removeTask,
  editTask,
  handleTaskEdit,
  handleEdit,
} from "./TodoList/tasksMethods.js";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      inputVal: "",
      edit: false,
      editVal: "",
      remove: false,
    };

    this.handleInputChange = handleInputChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.removeTask = removeTask.bind(this);
    this.editTask = editTask.bind(this);
    this.handleTaskEdit = handleTaskEdit.bind(this);
    this.handleEdit = handleEdit.bind(this);
  }

  render() {
    return (
      <>
        <AddTaskTool
          inputVal={this.state.inputVal}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
        <Tasks
          tasks={this.state.tasks}
          remove={this.state.remove}
          removeTask={this.removeTask}
          edit={this.state.edit}
          editTask={this.editTask}
          handleTaskEdit={this.handleTaskEdit}
          handleEdit={this.handleEdit}
        />
      </>
    );
  }
}

export default TodoList;
