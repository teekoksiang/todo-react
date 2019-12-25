import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import EventIcon from '@material-ui/icons/Event';
import SettingsIcon from '@material-ui/icons/Settings';
import './bottom-nav.styles.scss';

const BottomNav = ({ location }) => (
  <div className='bottom-nav-container'>
    <BottomNavigation
      showLabels
      className='bottom-nav'
    >
      <BottomNavigationAction 
        component={Link}
        to='/'
        label="Tasks" 
        icon={
          <CheckBoxIcon 
            className='icon'
            color={`${location.pathname === '/' 
                ? 'secondary' 
                : 'action'
              }`
            } 
          />
        } 
      />
      <BottomNavigationAction 
        component={Link}
        to='/event'
        label="Events" 
        icon={
          <EventIcon 
            className='icon' 
            color={`${location.pathname === '/event' 
                ? 'secondary' 
                : 'action'
              }`
            } 
          />
        } 
      />
      <BottomNavigationAction 
        component={Link}
        to='/setting'
        label="Settings" 
        icon={
          <SettingsIcon 
            className='icon' 
            color={`${location.pathname === '/setting' 
                ? 'secondary' 
                : 'action'
              }`
            } 
          />
        } 
      />
    </BottomNavigation>
  </div>
);

export default withRouter(BottomNav);