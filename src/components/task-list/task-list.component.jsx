import React from 'react';
import { connect } from 'react-redux';

import { selectTasksByDay } from '../../redux/task/task.selector';
import { toggleTask, removeTask } from '../../redux/task/task.action';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import './task-list.styles.scss';

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const TaskList = ({tasks, title, toggleTask, removeTask}) => {
  const classes = useStyles();
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
         {
            tasks.map(task => (
              <ListItem 
                button 
                key={task.id} 
                onClick={() => toggleTask(task)} 
                className={classes.nested}
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
                      onClick={() => removeTask(task)} 
                    /> 
                    /*<div>
                      <CheckCircleOutlineIcon className='task-complete' fontSize='small' />
                      
                    </div>*/
                  )
                  : <RadioButtonUncheckedIcon fontSize='small' />
                }
                </div>
              </ListItem>
           ))
         }
        </List>
      </Collapse>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  tasks: selectTasksByDay(props.start, props.end)(state)
});

const mapDispatchToProps = dispatch => ({
  toggleTask: task => dispatch(toggleTask(task)),
  removeTask: task => dispatch(removeTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);