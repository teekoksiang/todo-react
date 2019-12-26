import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
 
import { selectSections } from '../../redux/section/section.selector';
import { selectSearch } from '../../redux/task/task.selector';

import TaskListSection from '../task-list-section/task-list-section.component';

import List from '@material-ui/core/List';
import './task-list-container.styles.scss';

const TaskListContainer = ({ sections, search }) => (
  <List
    className='task-list-container'
    component='nav'
  >
    {
      sections.map(section => (
        <TaskListSection
          key={section.id}
          {...section}
          search={search}
        />
      ))
    }
  </List>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
  search: selectSearch
})

export default connect(mapStateToProps)(TaskListContainer);