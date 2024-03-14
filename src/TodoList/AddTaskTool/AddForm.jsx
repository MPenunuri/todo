import { Component } from "react";
import "./AddForm.css";

class AddForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit}
        className={this.props.activeAddTaskTool ? "addActive" : "addDisable"}
      >
        <label htmlFor="task-entry">Enter a task:</label>
        <input
          type="text"
          name="task-entry"
          id="task-entry"
          value={this.props.inputVal}
          onChange={this.props.handleInputChange}
          placeholder="Example: Do the laundry..."
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddForm;
