import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import taskReducer from './task/task.reducer';
import sectionReducer from './section/section.reducer';
import themeReducer from './theme/theme.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme'],
  blacklist: ['task'],
  // must blacklist task here in order to
  // blacklist task.search
};

const taskPersistConfig = {
  key: 'task',
  storage,
  blacklist: ['search'],
};

const rootReducer = combineReducers({
  task: persistReducer(taskPersistConfig, taskReducer),
  section: sectionReducer,
  theme: themeReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
