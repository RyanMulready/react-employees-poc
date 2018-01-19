/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';

export const LOAD_EMPLOYEES = "react/App/LOAD_EMPLOYEES"
export const LOAD_EMPLOYEES_SUCCESS = "react/App/LOAD_EMPLOYEES_SUCCESS"
export const LOAD_EMPLOYEES_ERROR = "react/App/LOAD_EMPLOYEES_ERROR"

export const LOAD_METADATA = "react/App/LOAD_METADATA"
export const LOAD_METADATA_SUCCESS = "react/App/LOAD_METADATA_SUCCESS"
export const LOAD_METADATA_ERROR = "react/App/LOAD_METADATA_ERROR"
