import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {
  updateTask,
  setTaskUpdated,
  removeTask,
} from '../../redux/task/task.action';
import { selectTaskUpdated } from '../../redux/task/task.selector';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddAlarmIcon from '@material-ui/icons/AddAlarm';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { DateTimePicker } from '@material-ui/pickers';
import { grey, red } from '@material-ui/core/colors';
import { taskDetailStyles, PrettoSlider } from '../../material-ui/styles';

const TaskDetail = ({
  history,
  currentTask,
  updateTask,
  removeTask,
  taskUpdated,
  setTaskUpdated,
}) => {
  const classes = taskDetailStyles();

  const [state, setState] = React.useState(currentTask);

  React.useEffect(() => {
    // componentWillUnmount
    return () => {
      setTaskUpdated(false);
    };
  }, []);

  const priorityMarks = [
    {
      value: 1,
      label: 'Low',
    },
    {
      value: 2,
      label: 'Priority',
    },
    {
      value: 3,
      label: 'High',
    },
  ];

  const handleChange = (propName, value) => (event, propValue) => {
    const newValue =
      value !== undefined ? value : propValue ? propValue : event.target.value;
    setState({
      ...state,
      [propName]: newValue,
    });
  };

  const handleDateChange = (momentDatetime) => {
    setState({
      ...state,
      datetime: momentDatetime,
    });
  };

  const handleUpdateTask = () => {
    updateTask(state);
  };

  const handleClose = () => {
    setTaskUpdated(false);
  };

  const handleRemoveTask = () => {
    removeTask(state);
    history.push('/');
  };

  return (
    <div className="task-detail">
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="name"
            className="input-field"
            label="Task"
            variant="outlined"
            value={state.name}
            onChange={handleChange('name')}
          />
        </div>
        <div>
          <TextField
            id="notes"
            className="input-field"
            label="Notes"
            multiline
            rows="4"
            variant="outlined"
            value={state.notes}
            onChange={handleChange('notes')}
          />
        </div>
        <div>
          <TextField
            id="cetegory"
            className="input-field"
            label="Category"
            variant="outlined"
            value={state.category}
            onChange={handleChange('category')}
          />
        </div>
        <div>
          <Fragment>
            <DateTimePicker
              id="datetime"
              className="input-field"
              label="Date & Time"
              inputVariant="outlined"
              format="MMM DD, YYYY hh:mm A"
              value={state.datetime}
              onChange={handleDateChange}
            />
          </Fragment>
        </div>
        <div className="button-margin">
          <ButtonGroup
            className="input-field"
            aria-label="outlined secondary button group"
          >
            <Button
              className="button-half-width"
              classes={{ label: classes.buttonText }}
              onClick={handleChange('set_reminder', !state.set_reminder)}
              variant={`${state.set_reminder ? 'contained' : 'outlined'}`}
              color={`${state.set_reminder ? 'secondary' : 'default'}`}
              startIcon={
                state.set_reminder ? (
                  <AlarmIcon
                    style={
                      state.set_reminder
                        ? { color: grey[50] }
                        : { color: grey[700] }
                    }
                  />
                ) : (
                  <AddAlarmIcon
                    style={
                      state.set_reminder
                        ? { color: grey[50] }
                        : { color: grey[700] }
                    }
                  />
                )
              }
            >
              <Typography
                style={
                  state.set_reminder
                    ? { color: grey[50] }
                    : { color: grey[700] }
                }
              >
                {state.set_reminder ? 'Set!' : 'Remind?'}
              </Typography>
            </Button>
            <Button
              className="button-half-width"
              classes={{ label: classes.buttonText }}
              onClick={handleChange('is_done', !state.is_done)}
              variant={`${state.is_done ? 'contained' : 'outlined'}`}
              color={`${state.is_done ? 'secondary' : 'default'}`}
              startIcon={
                state.is_done ? (
                  <CheckCircleOutlineIcon
                    style={
                      state.is_done ? { color: grey[50] } : { color: grey[700] }
                    }
                  />
                ) : (
                  <RadioButtonUncheckedIcon
                    style={
                      state.is_done ? { color: grey[50] } : { color: grey[700] }
                    }
                  />
                )
              }
            >
              <Typography
                style={
                  state.is_done ? { color: grey[50] } : { color: grey[700] }
                }
              >
                {state.is_done ? 'Done!' : 'Done?'}
              </Typography>
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <PrettoSlider
            id="priority"
            className="input-field"
            value={state.priority}
            aria-labelledby="priority-slider"
            color="secondary"
            step={1}
            marks={priorityMarks}
            min={1}
            max={3}
            onChange={handleChange('priority')}
          />
        </div>
        <div className="button-margin">
          <Button
            className="input-field"
            variant="outlined"
            color="secondary"
            onClick={handleUpdateTask}
          >
            Save
          </Button>
        </div>
        <div className="button-margin">
          <Button
            className="input-field"
            variant="outlined"
            onClick={handleRemoveTask}
          >
            <span style={{ color: red[500] }}>Remove</span>
          </Button>
        </div>
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={taskUpdated}
        autoHideDuration={400}
        onClose={handleClose}
        message="Task updated"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  taskUpdated: selectTaskUpdated,
});

const mapDispatchToProps = (dispatch) => ({
  updateTask: (task) => dispatch(updateTask(task)),
  setTaskUpdated: (bool) => dispatch(setTaskUpdated(bool)),
  removeTask: (task) => dispatch(removeTask(task)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TaskDetail)
);
