import React from 'react';
import { connect } from 'react-redux';

import { fetchTasks } from '../../redux/task/task.action';

import TaskListContainer from '../../components/task-list-container/task-list-container.component';
import TaskBar from '../../components/task-bar/task-bar.component';

import './home.styles.scss';

class Home extends React.Component {
  componentDidMount() {
    const { fetchTasks } = this.props;
    fetchTasks();
  }

  render() {
    return (
      <div className='home'>
        <TaskListContainer />
        <TaskBar />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTasks: () => dispatch(fetchTasks())
});

export default connect(
  null,
  mapDispatchToProps
)(Home);