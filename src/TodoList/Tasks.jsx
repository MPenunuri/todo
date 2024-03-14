import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class Tasks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.tasks.map((task) => {
          return <li key={uuidv4()}>{task}</li>;
        })}
      </ul>
    );
  }
}

export default Tasks;
