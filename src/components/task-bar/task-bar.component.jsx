import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { addTask } from '../../redux/task/task.action';
import { selectNewId } from '../../redux/task/task.selector';

import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';

import './task-bar.styles.scss';

const TaskBar = ({ addTask, newId }) => {
  const [isEmpty, setIsEmpty] = React.useState(true);
  const [taskName, setTaskName] = React.useState('');

  const handleChange = event => {
    const taskName = event.target.value;
    setTaskName(taskName);
    taskName.length > 0 
    ? setIsEmpty(false)
    : setIsEmpty(true)
  };

  const handleAddTask = () => {
    if (taskName.length > 0) {
      const task = {
        id: newId,
        name: taskName,
        notes: '',
        datetime: moment().format('YYYY-MM-DD HH:ss'),
        set_reminder: false,
        is_done: false,
        creator_id: 1,
        category_id: 1,
        priority: 1,
      }
      addTask(task);
      setTaskName('');
    }
  };

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddTask();
    }
  }

  return (
    <div className='task-bar'>
      <form noValidate autoComplete="off">
        <TextField
          fullWidth
          label="Add task..." 
          variant="outlined" 
          color='secondary'
          InputProps={{
            endAdornment:
              <InputAdornment position="end">
                <IconButton
                  aria-label="add task"
                  disabled={isEmpty}
                  onClick={handleAddTask}
                >
                  <AddIcon />
                </IconButton>
              </InputAdornment>
          }}
          value={taskName}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </form> 
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  newId: selectNewId
});

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task))
}); 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskBar);