export const ThemeTypes = {
  LIGHT_THEME: 'LIGHT_THEME',
  DARK_THEME: 'DARK_THEME',
  GREY_THEME: 'GREY_THEME',
}

const greyTheme ={
  palette: {
    type: 'dark',
    primary: {
      main: '#344955'
    },
    secondary: {
      main: '#F9AA33'
    },
    background: {
      default: '#232F34',
      paper: '#344955',
    }
  }
};

const lightTheme ={
  palette: {
    type: 'light',
    primary: {
      main: '#0336FF'
    },
    secondary: {
      main: '#00d4c0'
    },
  }
};

const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#262626'
    },
    secondary: {
      main: '#40c4ff'
    },
    background: {
      default: '#121212',
      paper: '#262626',
    }
  }
};

export const Themes = {
  [ThemeTypes.LIGHT_THEME]: lightTheme,
  [ThemeTypes.DARK_THEME]: darkTheme,
  [ThemeTypes.GREY_THEME]: greyTheme,
};