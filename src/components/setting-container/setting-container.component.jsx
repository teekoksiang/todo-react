import React from 'react';

import SettingTheme from '../setting-theme/setting-theme.component';

import List from '@material-ui/core/List';

const SettingContainer = () => (
  <List className="setting-container" component="nav">
    <SettingTheme />
  </List>
);

export default SettingContainer;
