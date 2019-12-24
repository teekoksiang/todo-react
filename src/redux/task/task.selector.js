import { createSelector } from 'reselect';
import moment from 'moment';

const selectTask = state => state.task;

export const selectTasks = createSelector(
  [selectTask],
  task => task.tasks 
);

export const selectTasksByDay = (start, end) => 
  createSelector(
    [selectTasks],
    tasks => tasks.filter(task => {
      const dayDiff = moment(task.datetime)
        .startOf('day')
        .diff(moment().startOf('day'), 'days');
      return end ? 
        dayDiff >= start && dayDiff < end 
        : dayDiff >= start;
    })
  );