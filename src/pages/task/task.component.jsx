import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchTask } from '../../redux/task/task.action';
import { selectCurrentTask } from '../../redux/task/task.selector';

import TaskDetail from '../../components/task-detail/task-detail.component';

import './task.styles.scss';

class Task extends React.Component {
  componentDidMount() {
    const taskId = this.props.match.params.id;
    const { fetchTask } = this.props;

    fetchTask(taskId);
  }

  render() {
    return (
      <div className="task">
        <TaskDetail currentTask={this.props.currentTask} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  currentTask: selectCurrentTask(props.match.params.id)(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTask: (taskId) => dispatch(fetchTask(taskId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Task));
