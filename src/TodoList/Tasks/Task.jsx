import { Component } from "react";
import "./Task.css";

class Task extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        onSubmit={(e) => {
          this.props.handleEdit(e, this.props.task);
        }}
        className={this.props.edit ? "editActive" : "editDisable"}
      >
        <label htmlFor="task">Task:</label>
        <input
          type="text"
          name="task"
          id="task"
          defaultValue={this.props.task.task}
          onChange={() => {}}
          readOnly={!this.props.edit}
          placeholder="Error: No empty tasks allowed"
          required
        />
        <button
          type={this.props.edit ? "submit" : "button"}
          onClick={this.props.edit ? () => {} : this.props.editTask}
        >
          {this.props.edit ? "Save" : "Edit"}
        </button>
      </form>
    );
  }
}

export default Task;
