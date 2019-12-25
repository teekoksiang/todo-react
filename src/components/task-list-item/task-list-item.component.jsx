import React from 'react';
import { connect } from 'react-redux';

import { toggleTask, removeTask } from '../../redux/task/task.action';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import './task-list-item.styles.scss';

const TaskListItem = ({ task, toggleTask, removeTask }) => {
  const handleRemoveTask = (event, task) => {
    event.stopPropagation();
    removeTask(task);
  };

  return (
    <div className='list-item'>
      <ListItem 
        button 
        key={task.id} 
        onClick={() => toggleTask(task)} 
      >
        <ListItemText 
          className={`${task.is_done ? 'task-complete' : ''} task-name`}
          primary={task.name} 
        />
        <div>
        {
          task.is_done ? (
            <RemoveCircleOutlineIcon 
              fontSize='small' 
              color='error'
              onClick={(event) => handleRemoveTask(event, task)} 
            /> 
          )
          : <RadioButtonUncheckedIcon fontSize='small' />
        }
        </div>
      </ListItem>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleTask: task => dispatch(toggleTask(task)),
  removeTask: task => dispatch(removeTask(task))
});

export default connect(
  null,
  mapDispatchToProps
)(TaskListItem);