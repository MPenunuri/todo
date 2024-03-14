import { v4 as uuidv4 } from "uuid";

export function handleInputChange(e) {
  this.setState((state) => ({
    ...state,
    inputVal: e.target.value,
  }));
}

export function handleSubmit(e) {
  e.preventDefault();
  this.setState((state) => ({
    tasks: state.tasks.concat({
      id: uuidv4(),
      task: state.inputVal,
      onEdition: false,
      createdAt: new Date(),
    }),
    inputVal: "",
  }));
}
