export function removeTask(e, task) {
  e.preventDefault();
  this.setState((state) => {
    const fileredTasks = state.tasks.filter((t) => t.id !== task.id);
    return {
      ...state,
      tasks: fileredTasks,
      edit: false,
    };
  });
}

export function editTask(e, task) {
  e.preventDefault();
  this.setState((state) => {
    const updatedTasks = [...state.tasks];
    const taskIndex = updatedTasks.findIndex((t) => t.id === task.id);
    const editedTask = { ...task, onEdition: true };
    updatedTasks[taskIndex] = editedTask;
    return {
      ...state,
      edit: true,
      tasks: updatedTasks,
    };
  });
}

export function handleTaskEdit(e) {
  this.setState((state) => ({
    ...state,
    editVal: e.target.value,
  }));
}

export function handleEdit(e, task) {
  e.preventDefault();

  this.setState((state) => {
    const updatedTasks = [...state.tasks];
    const taskIndex = updatedTasks.findIndex((t) => t.id === task.id);
    const editedTask = { ...task, onEdition: false, task: state.editVal };
    updatedTasks[taskIndex] = editedTask;
    return {
      ...state,
      tasks: updatedTasks,
    };
  });

  this.setState((state) => ({
    ...state,
    edit: false,
  }));
}
