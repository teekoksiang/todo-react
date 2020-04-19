import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateTask, removeTask } from '../../redux/task/task.action';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const TaskListItem = ({ task, updateTask, removeTask, history }) => {
  const handleRemoveTask = event => {
    event.stopPropagation();
    removeTask(task);
  };

  const handleToggleTask = event => {
    event.stopPropagation();
    const isDone = !task.is_done;
    const updatedTask = {
      ...task,
      is_done: isDone
    };
    updateTask(updatedTask);
  };

  const handleOnClick = () => {
    history.push(`/task/${task.id}`);
  };

  return (
    <div className="task-list-item">
      <ListItem button key={task.id} onClick={handleOnClick}>
        <ListItemText
          className={`${task.is_done ? 'task-complete' : ''} task-name`}
          primary={task.name}
        />
        <div>
          {task.is_done ? (
            <RemoveCircleOutlineIcon
              fontSize="small"
              color="error"
              onClick={event => handleRemoveTask(event)}
            />
          ) : (
            <RadioButtonUncheckedIcon
              fontSize="small"
              onClick={event => handleToggleTask(event)}
            />
          )}
        </div>
      </ListItem>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  updateTask: task => dispatch(updateTask(task)),
  removeTask: task => dispatch(removeTask(task))
});

export default withRouter(connect(null, mapDispatchToProps)(TaskListItem));
