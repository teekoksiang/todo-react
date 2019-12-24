import TaskActionTypes from './task.types';

export const addTask = task => ({
  type: TaskActionTypes.ADD_TASK,
  payload: task
});

export const removeTask = task => ({
  type: TaskActionTypes.REMOVE_TASK,
  payload: task
});

export const toggleTask = task => ({
  type: TaskActionTypes.TOGGLE_TASK,
  payload: task
});

export const updateTask = task => ({
  type: TaskActionTypes.UPDATE_TASK,
  payload: task
});