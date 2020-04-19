import { all, call } from 'redux-saga/effects';

import { taskSagas } from './task/task.saga';
import { userSagas } from './user/user.saga';

export default function* rootSaga() {
  yield all([call(taskSagas), call(userSagas)]);
}
