/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');
const selectRoute = (state) => state.get('route');

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectEmployees = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['lists', 'employees'])
);

const makeSelectEmployee = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['lists', 'employees'])
)

const makeSelectMetaData = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn('metadata')
);

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectMetaData,
  makeSelectEmployees,
  makeSelectEmployee,
};