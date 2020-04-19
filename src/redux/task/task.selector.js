import { createSelector } from 'reselect';
import moment from 'moment';

const selectTask = (state) => state.task;

export const selectTaskUpdated = createSelector(
  [selectTask],
  (task) => task.taskUpdated
);

export const selectTasks = createSelector([selectTask], (task) => task.tasks);

export const selectCurrentTask = (taskId) =>
  createSelector([selectTasks], (tasks) =>
    tasks.find((task) => {
      return task.id === parseInt(taskId);
    })
  );

export const selectSearch = createSelector([selectTask], (task) => task.search);

export const selectTasksByDay = (start, end, search) =>
  createSelector([selectTasks], (tasks) => {
    if (tasks.length !== 0) {
      return tasks.filter((task) => {
        if (search !== '') {
          if (!task.name.toLowerCase().includes(search.toLowerCase())) {
            return false;
          }
        }

        const dayDiff = moment(task.datetime)
          .startOf('day')
          .diff(moment().startOf('day'), 'days');
        return end ? dayDiff >= start && dayDiff < end : dayDiff >= start;
      });
    } else {
      return [];
    }
  });
