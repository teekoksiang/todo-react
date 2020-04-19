import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { fetchTasks } from '../../redux/task/task.action';

import TaskListContainer from '../../components/task-list-container/task-list-container.component';
import TaskBar from '../../components/task-bar/task-bar.component';

import './home.styles.scss';

class Home extends React.Component {
  componentDidMount() {
    const { fetchTasks } = this.props;
    const { currentUser } = this.props;
    fetchTasks(currentUser.id);
  }

  render() {
    return (
      <div className="home">
        <TaskListContainer />
        <TaskBar />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTasks: (userId) => dispatch(fetchTasks(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
