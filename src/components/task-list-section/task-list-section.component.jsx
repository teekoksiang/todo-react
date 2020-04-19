import React from 'react';
import { connect } from 'react-redux';

import { selectTasksByDay } from '../../redux/task/task.selector';

import TaskListItem from '../task-list-item/task-list-item.component';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const TaskListSection = ({ tasks, title }) => {
  const [open, setOpen] = React.useState(true);

  const expandList = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItem button onClick={expandList}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {tasks.map(task => (
            <TaskListItem key={task.id} task={task} />
          ))}
        </List>
      </Collapse>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  tasks: selectTasksByDay(props.start, props.end, props.search)(state)
});

export default connect(mapStateToProps)(TaskListSection);
