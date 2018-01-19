/*
 * App Actions
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
    LOAD_EMPLOYEES,
    LOAD_EMPLOYEES_SUCCESS,
    LOAD_EMPLOYEES_ERROR,
    LOAD_METADATA,
    LOAD_METADATA_SUCCESS,
    LOAD_METADATA_ERROR,
  } from './constants';
  
  /**
   * Load the employee list, this action starts the request saga
   *
   * @return {object} An action object with a type of LOAD_EMPLOYEES
   */
  export function loadEmployees() {
    return {
      type: LOAD_EMPLOYEES,
    };
  }
  
  /**
   * Dispatched when the employees are loaded by the request saga
   *
   * @param  {array} employees The repository data
   *
   * @return {object}      An action object with a type of LOAD_EMPLOYEES_SUCCESS passing the repos
   */
  export function employeesLoaded(employees) {
    return {
      type: LOAD_EMPLOYEES_SUCCESS,
      employees,
    };
  }
  
  /**
   * Dispatched when loading the employees fails
   *
   * @param  {object} error The error
   *
   * @return {object}       An action object with a type of LOAD_EMPLOYEES_ERROR passing the error
   */
  export function employeesLoadingError(error) {
    return {
      type: LOAD_EMPLOYEES_ERROR,
      error,
    };
  }
  /**
   * Load the employee list, this action starts the request saga
   *
   * @return {object} An action object with a type of LOAD_EMPLOYEES
   */
  export function loadMetadata() {
    return {
      type: LOAD_METADATA,
    };
  }
  
  /**
   * Dispatched when the employees are loaded by the request saga
   *
   * @param  {object} metadata The repository data
   *
   * @return {object}      An action object with a type of LOAD_EMPLOYEES_SUCCESS passing the repos
   */
  export function metaDataLoaded(metadata) {
    return {
      type: LOAD_METADATA_SUCCESS,
      metadata,
    };
  }
  
  /**
   * Dispatched when loading the employees fails
   *
   * @param  {object} error The error
   *
   * @return {object}       An action object with a type of LOAD_EMPLOYEES_ERROR passing the error
   */
  export function metadataLoadingError(error) {
    return {
      type: LOAD_METADATA_ERROR,
      error,
    };
  }