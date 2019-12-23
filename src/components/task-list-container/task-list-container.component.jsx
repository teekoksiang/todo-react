import React from 'react';
import moment from 'moment';

import TASK_DATA from './task-list.data';

import TaskList from '../task-list/task-list.component';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import './task-list-container.styles.scss';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TaskListContainer = () => {
  const classes = useStyles();
  const [taskData] = React.useState(TASK_DATA);

  const filterTask = (from, to) => {
    const filteredList = taskData.filter(task => {
        const diff = moment(task.datetime).startOf('day').diff(moment().startOf('day'), 'days');
        console.log(diff);
        return to ? diff >= from && diff < to : diff >= from;
    });
    console.log(filteredList);
    return filteredList;
  }

  return (
    <List
      component='nav'
      className={classes.root}
    >
      <TaskList key='today' data={filterTask(0, 1)} title='Today' />
      <TaskList key='tomorrow' data={filterTask(1, 2)} title='Tomorrow' />
      <TaskList key='upcoming' data={filterTask(2)} title='Upcoming' />
    </List>
  );
};

export default TaskListContainer;