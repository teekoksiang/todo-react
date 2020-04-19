import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  fetchTasksSuccess,
  actionFailure,
  actionSuccess,
  setTaskUpdated,
} from './task.action';
import TaskActionTypes from './task.types';

import API from '../../utils/API';

const getTasksByUserId = (userId) => {
  const config = {
    params: {
      user_id: userId,
    },
  };
  return API.get(`todo/tasks/`, config);
};

const createTask = (payload) => {
  return API.post(`todo/tasks`, payload);
};

const updateTask = (payload) => {
  return API.put(`todo/update/${payload.id}`, payload);
};

const deleteTask = (taskId) => {
  return API.delete(`todo/delete/${taskId}`);
};

export function* fetchTaskAsync({ payload }) {
  try {
    const res = yield call(getTasksByUserId, payload);
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

export function* fetchTasksAsync({ payload }) {
  try {
    const res = yield call(getTasksByUserId, payload);
    if (res.data.message.error) {
      yield put(fetchTasksSuccess([]));
    } else {
      yield put(fetchTasksSuccess(res.data.message));
    }
  } catch (error) {
    yield put(actionFailure(error.message));
  }
}

export function* addTaskAsync({ payload }) {
  try {
    yield call(createTask, payload);
    yield fetchTasksAsync({ payload: payload.user_id });
  } catch (error) {
    yield put(actionFailure(error.message));
  }
}

export function* removeTaskAsync({ payload }) {
  try {
    const taskId = payload.id;
    yield call(deleteTask, taskId);
    yield fetchTasksAsync({ payload: payload.user_id });
  } catch (error) {
    yield put(actionFailure(error.message));
  }
}

export function* updateTaskSuccess(userId) {
  yield put(setTaskUpdated(true));
  yield fetchTasksAsync({ payload: userId });
}

export function* updateTaskAsync({ payload }) {
  try {
    yield call(updateTask, payload);
    yield updateTaskSuccess(payload.user_id);
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
