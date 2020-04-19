import React from 'react';
import { connect } from 'react-redux';
import { setTheme } from '../../redux/theme/theme.action';

import { selectThemes } from '../../redux/theme/theme.selector';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const SettingTheme = ({ themes, setTheme }) => (
  <div className="theme-option">
    <ListItem>
      <ListItemText className="list-title" primary="Theme" />

      <div className="list-option">
        {themes.map(theme => (
          <IconButton
            key={theme.type}
            aria-label={theme.theme}
            onClick={() => setTheme(theme.type)}
          >
            <FiberManualRecordIcon
              fontSize="large"
              style={{ color: theme.color.main }}
            />
          </IconButton>
        ))}
      </div>
    </ListItem>
  </div>
);

const mapStateToProps = () => ({
  themes: selectThemes
});

const mapDispatchToAction = dispatch => ({
  setTheme: theme => dispatch(setTheme(theme))
});

export default connect(mapStateToProps, mapDispatchToAction)(SettingTheme);
