import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import taskReducer from './task/task.reducer';
import sectionReducer from './section/section.reducer';
import themeReducer from './theme/theme.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme'],
  blacklist: ['task'] // must blacklist task for taskPersistConfig blacklist
};

const taskPersistConfig = {
  key: 'task',
  storage,
  blacklist: ['search'],
};

const rootReducer = combineReducers({
  task: persistReducer(taskPersistConfig, taskReducer),
  section: sectionReducer,
  theme: themeReducer
});

export default persistReducer(persistConfig, rootReducer);