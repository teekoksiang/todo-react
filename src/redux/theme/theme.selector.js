import { createSelector } from 'reselect';

import { Themes } from '../../material-ui/theme';

const selectTheme = state => state.theme;

export const selectCurrentTheme = createSelector(
  [selectTheme],
  theme => theme.currentTheme
);

export const selectThemes = 
  Object.keys(Themes).map(key => ({
    type: key,
    color: Themes[key].palette.primary
  }));
