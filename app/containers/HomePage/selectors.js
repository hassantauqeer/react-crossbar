/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);

const makeSelectConnection = () => createSelector(
  selectHome,
  (homeState) => homeState.get('connection')
);

export {
  selectHome,
  makeSelectUsername,
    makeSelectConnection,
};
