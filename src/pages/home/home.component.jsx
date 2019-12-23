import React from 'react';

import TaskListContainer from '../../components/task-list-container/task-list-container.component';

import './home.styles.scss';

const Home = () => (
  <div className='home'>
    <TaskListContainer />
  </div>
);

export default Home;