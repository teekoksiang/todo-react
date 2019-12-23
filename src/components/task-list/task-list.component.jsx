import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import './task-list.styles.scss';

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const TaskList = ({data, title}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const expandList = () => {
    setOpen(!open);
  };

  const completeTask = ({ id }) => {
    const task = data.find(task => task.id === id);
    task.is_done = true;
    console.log(task);
  };

  return (
    <div>
      <ListItem button onClick={expandList}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
         {
           data.map(task => (
            <ListItem key={task.id} button onClick={() => completeTask(task)} className={classes.nested}>
              <ListItemText primary={task.name} />
              {task.is_done ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon />}
            </ListItem>
           ))
         }
        </List>
      </Collapse>
    </div>
  );
};

export default TaskList;