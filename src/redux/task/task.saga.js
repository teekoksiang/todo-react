import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  fetchTasksSuccess,
  actionFailure,
  actionSuccess,
  setTaskUpdated,
} from './task.action';
import TaskActionTypes from './task.types';

export function* fetchTaskAsync({ payload }) {
  const taskId = payload;

  try {
    const res = yield call(fetch, `/api/tasks/${taskId}`);
    const resData = yield call(res.json.bind(res));
    const object = {
      key: 'currentTask',
      value: resData,
    };
    yield put(actionSuccess(object));
  } catch (error) {
    yield put(actionFailure(error.message));
  }
}

export function* fetchTasksAsync() {
  try {
    const res = yield call(fetch, '/api/tasks');
    const resData = yield call(res.json.bind(res));
    yield put(fetchTasksSuccess(resData));
  } catch (error) {
    yield put(actionFailure(error.message));
  }
}

export function* addTaskAsync({ payload }) {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    yield call(fetch, '/api/tasks', options);
    yield fetchTasksAsync();
  } catch (error) {
    yield put(actionFailure(error.message));
  }
}

export function* removeTaskAsync({ payload }) {
  try {
    const taskId = payload.id;

    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    yield call(fetch, `/api/tasks/${taskId}`, options);
    yield fetchTasksAsync();
  } catch (error) {
    yield put(actionFailure(error.message));
  }
}

export function* updateTaskSuccess() {
  yield put(setTaskUpdated(true));
  yield fetchTasksAsync();
}

export function* updateTaskAsync({ payload }) {
  try {
    const taskId = payload.id;

    const options = {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    yield call(fetch, `/api/tasks/${taskId}`, options);
    yield updateTaskSuccess();
  } catch (error) {
    yield put(actionFailure(error.message));
  }
}

export function* onfetchTask() {
  yield takeLatest(TaskActionTypes.FETCH_TASK, fetchTaskAsync);
}

export function* onfetchTasks() {
  yield takeLatest(TaskActionTypes.FETCH_TASKS, fetchTasksAsync);
}

export function* onAddTask() {
  yield takeLatest(TaskActionTypes.ADD_TASK, addTaskAsync);
}

export function* onRemoveTask() {
  yield takeLatest(TaskActionTypes.REMOVE_TASK, removeTaskAsync);
}

export function* onUpdateTask() {
  yield takeLatest(TaskActionTypes.UPDATE_TASK, updateTaskAsync);
}

export function* taskSagas() {
  yield all([
    call(onfetchTask),
    call(onfetchTasks),
    call(onAddTask),
    call(onRemoveTask),
    call(onUpdateTask),
  ]);
}
