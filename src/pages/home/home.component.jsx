import React from 'react';

import TaskListContainer from '../../components/task-list-container/task-list-container.component';
import TaskBar from '../../components/task-bar/task-bar.component';

import './home.styles.scss';

const Home = () => (
  <div className='home'>
    <TaskListContainer />
    <TaskBar className='task-bar' />
  </div>
);

export default Home;