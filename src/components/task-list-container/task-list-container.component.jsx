import React from 'react';

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

  return (
    <List
      component='nav'
      className={classes.root}
    >
      <TaskList 
        key='today' 
        start={0} 
        end={1} 
        title='Today' 
      />
      <TaskList 
        key='tomorrow' 
        start={1} 
        end={2} 
        title='Tomorrow' 
      />
      <TaskList 
        key='upcoming' 
        start={2} 
        title='Upcoming' 
      />
    </List>
  );
};

export default TaskListContainer;