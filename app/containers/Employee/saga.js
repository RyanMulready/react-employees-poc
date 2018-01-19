/**
 * Gets the employees list
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_EMPLOYEES, LOAD_METADATA } from 'containers/App/constants';
import { employeesLoaded, employeesLoadingError, metaDataLoaded, metadataLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Emplyoee List handling
 */
export function* getEmployees() {
  const requestURL = 'http://localhost:10002/employeeslist';

  try {
    // Call our request helper (see 'utils/request')
    const employees = yield call(request, requestURL);
    yield put(employeesLoaded(employees));
  } catch (err) {
    console.log(err)
    yield put(employeesLoadingError(err));
  }
}

export function* getMetadata() {
  const requestURL = 'http://localhost:10002/metadata';

  try {
    // Call our request helper (see 'utils/request')
    const metadata = yield call(request, requestURL);
    yield put(metaDataLoaded(metadata));
  } catch (err) {
    console.log(err)
    yield put(metadataLoadingError(err));
  }
}