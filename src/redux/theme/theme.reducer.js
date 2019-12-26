import ThemeActionTypes from './theme.types';

import { Themes, ThemeTypes } from '../../material-ui/theme';

const INITIAL_STATE = {
  currentTheme: Themes[ThemeTypes.LIGHT_THEME]
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemeActionTypes.SET_THEME:
      return {
        ...state,
        currentTheme: Themes[action.payload]
      };
    default:
      return state;
  }
}

export default themeReducer;