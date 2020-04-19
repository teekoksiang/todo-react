import TaskActionTypes from './task.types';

const INITIAL_STATE = {
  tasks: [],
  search: '',
  errorMessage: '',
  currentTask: {},
  taskUpdated: false,
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TaskActionTypes.SEARCH_TASK:
      return {
        ...state,
        search: action.payload
      };
    case TaskActionTypes.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
        errorMessage: ''
      };
    case TaskActionTypes.ACTION_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case TaskActionTypes.ACTION_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        [action.payload.key]: action.payload.value
      };
    case TaskActionTypes.TASK_UPDATED:
      return {
        ...state, 
        taskUpdated: action.payload
      }
    default:
      return state;
  }
}

export default taskReducer;