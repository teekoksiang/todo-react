export const addTask = (tasks, taskToAdd) => {
  return [...tasks, taskToAdd];
};

export const removeTask = (tasks, taskToRemove) => {
  return tasks.filter(
    task => task.id !== taskToRemove.id
  );
};

export const toggleTask = (tasks, taskToToggle) => {
  const taskById = tasks.find(
    task => task.id === taskToToggle.id
  );
  
  console.log('found task:', taskById);

  const updatedTasks = tasks.map(task => 
    task.id === taskToToggle.id ? {
      ...task, is_done: !task.is_done
    } : task
  );
  console.log(updateTask);
  return updatedTasks;
};

export const updateTask = (tasks, taskToUpdate) => {
  return tasks.map(task => 
    task.id === taskToUpdate.id ? {
      ...task, ...taskToUpdate
    } : task
  );
};