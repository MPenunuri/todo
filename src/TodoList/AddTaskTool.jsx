import { Component } from "react";
import AddForm from "./AddTaskTool/AddForm.jsx";
import "./AddTaskTool/AddTaskTool.css";

class AddTaskTool extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeAddTaskTool: false,
    };

    this.handleActiveBtn = this.handleActiveBtn.bind(this);
  }

  handleActiveBtn() {
    this.setState((state) => ({
      activeAddTaskTool: !state.activeAddTaskTool,
    }));
  }

  render() {
    return (
      <>
        <button
          type="button"
          aria-label="Show add task form"
          className={
            this.state.activeAddTaskTool ? "addDisableBtn" : "addActiveBtn"
          }
          onClick={this.handleActiveBtn}
        >
          {this.state.activeAddTaskTool ? "-" : "+"}
        </button>
        <AddForm
          activeAddTaskTool={this.state.activeAddTaskTool}
          inputVal={this.props.inputVal}
          handleInputChange={this.props.handleInputChange}
          handleSubmit={this.props.handleSubmit}
        />
      </>
    );
  }
}

export default AddTaskTool;
