import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
 
import { selectSections } from '../../redux/section/section.selector';

import TaskListSection from '../task-list-section/task-list-section.component';

import List from '@material-ui/core/List';
import './task-list-container.styles.scss';

const TaskListContainer = ({ sections }) => (
  <List
    component='nav'
    className='list'
  >
    {
      sections.map(section => (
        <TaskListSection
          key={section.id}
          {...section}
        />
      ))
    }
  </List>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections
})

export default connect(mapStateToProps)(TaskListContainer);