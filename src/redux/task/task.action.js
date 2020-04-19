import TaskActionTypes from './task.types';

export const addTask = task => ({
  type: TaskActionTypes.ADD_TASK,
  payload: task
});

export const removeTask = task => ({
  type: TaskActionTypes.REMOVE_TASK,
  payload: task
});

export const updateTask = task => ({
  type: TaskActionTypes.UPDATE_TASK,
  payload: task
});

export const setTaskUpdated = bool => ({
  type: TaskActionTypes.TASK_UPDATED,
  payload: bool
});

export const searchTask = search => ({
  type: TaskActionTypes.SEARCH_TASK,
  payload: search
});

export const fetchTask = id => ({
  type: TaskActionTypes.FETCH_TASK,
  payload: id
});

export const fetchTasks = () => ({
  type: TaskActionTypes.FETCH_TASKS
});

export const fetchTasksSuccess = tasks => ({
  type: TaskActionTypes.FETCH_TASKS_SUCCESS,
  payload: tasks
});

export const actionFailure = errorMessage => ({
  type: TaskActionTypes.ACTION_FAILURE,
  payload: errorMessage
});

export const actionSuccess = object => ({
  type: TaskActionTypes.ACTION_SUCCESS,
  payload: object
});