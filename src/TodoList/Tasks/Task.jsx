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
        className={this.props.task.onEdition ? "editActive" : "editDisable"}
      >
        <label htmlFor="task">Task:</label>
        <input
          type="text"
          name="task"
          id="task"
          defaultValue={this.props.task.task}
          onChange={() => {}}
          readOnly={!this.props.task.onEdition}
          placeholder="Error: No empty tasks allowed"
          required
        />
        {this.props.edit && !this.props.task.onEdition ? (
          <></>
        ) : (
          <>
            <button
              type={this.props.task.onEdition ? "submit" : "button"}
              onClick={
                this.props.edit
                  ? () => {}
                  : (e) => {
                      this.props.editTask(e, this.props.task);
                    }
              }
            >
              {this.props.task.onEdition ? "Save" : "Edit"}
            </button>
            <button
              type="button"
              onClick={(e) => {
                this.props.removeTask(e, this.props.task);
              }}
            >
              Delete
            </button>
          </>
        )}
      </form>
    );
  }
}

export default Task;
