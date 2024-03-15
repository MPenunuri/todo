import { Component } from "react";
import Task from "./Tasks/Task.jsx";
import "./Tasks/Tasks.css";

class Tasks extends Component {
  render() {
    return this.props.tasks.length > 0 ? (
      <>
        <h2>Your tasks:</h2>
        <section aria-label="Tasks list">
          {this.props.tasks.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                removeTask={this.props.removeTask}
                edit={this.props.edit}
                editTask={this.props.editTask}
                handleTaskEdit={this.props.handleTaskEdit}
                handleEdit={this.props.handleEdit}
              />
            );
          })}
        </section>
      </>
    ) : (
      <h3>No tasks registered yet.</h3>
    );
  }
}

export default Tasks;
