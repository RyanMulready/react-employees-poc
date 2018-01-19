/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
    LOAD_EMPLOYEES,
    LOAD_EMPLOYEES_SUCCESS,
    LOAD_EMPLOYEES_ERROR,
    LOAD_METADATA,
    LOAD_METADATA_SUCCESS,
    LOAD_METADATA_ERROR,
  } from './constants';
  import { fromJS } from 'immutable';
  
  // The initial state of the App
  const initialState = fromJS({
    loading: false,
    error: false,
    lists: {
      employees: null,
    },
    metadata: {
      columns: {
        employeescolumns: []
      }
    },
  });
  
  function appReducer(state = initialState, action) {
    switch (action.type) {
      case LOAD_EMPLOYEES:
        return state
          .set('loading', true)
          .set('error', false)
          .setIn(['lists', 'employees'], initialState.lists.employees);
      case LOAD_EMPLOYEES_SUCCESS:
        return state
          .setIn(['lists', 'employees'], action.employees)
          .set('loading', false)
      case LOAD_EMPLOYEES_ERROR:
        return state
          .set('error', action.error)
          .set('loading', false);
      case LOAD_METADATA:
          return state
            .set('loading', true)
            .set('error', false)
            .setIn('metadata', initialState.metadata);
        case LOAD_METADATA_SUCCESS:
          return state
            .setIn('metadata', action.metadata)
            .set('loading', false)
        case LOAD_METADATA_ERROR:
          return state
            .set('error', action.error)
            .set('loading', false);
      default:
        return state;
    }
  }
  
  export default appReducer;