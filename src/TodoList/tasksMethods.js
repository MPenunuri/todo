export function removeTask(task) {
  this.setState((state) => {
    const fileredTasks = state.tasks.filter((t) => t.id !== task.id);
    return {
      ...state,
      tasks: fileredTasks,
    };
  });
}

export function editTask(e) {
  e.preventDefault();
  this.setState((state) => ({
    ...state,
    edit: true,
  }));
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
    const editedTask = { ...task };
    editTask.task = state.editVal;
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
