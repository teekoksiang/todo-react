import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import taskReducer from './task/task.reducer';
import sectionReducer from './section/section.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['task']
};

const rootReducer = combineReducers({
  task: taskReducer,
  section: sectionReducer
});

export default persistReducer(persistConfig, rootReducer);