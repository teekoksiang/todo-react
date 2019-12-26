import TaskActionTypes from './task.types';

import TASK_DATA from './task.data';
import { 
  addTask, 
  removeTask, 
  toggleTask, 
  updateTask,
} from './task.utils';

const INITIAL_STATE = {
  tasks: TASK_DATA,
  search: '',
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: addTask(state.tasks, action.payload)
      };
    case TaskActionTypes.REMOVE_TASK:
      return {
        ...state,
        tasks: removeTask(state.tasks, action.payload)
      };
    case TaskActionTypes.TOGGLE_TASK:
      return {
        ...state,
        tasks: toggleTask(state.tasks, action.payload)
      };
    case TaskActionTypes.UPDATE_TASK:
      return {
        ...state,
        tasks: updateTask(state.tasks, action.payload)
      };
    case TaskActionTypes.SEARCH_TASK:
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
}

export default taskReducer;