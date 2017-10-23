import { createSelector } from 'reselect';

/**
 * Direct selector to the comp1 state domain
 */
const selectComp1Domain = (state) => state.get('comp1');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Comp1
 */

const makeSelectComp1 = () => createSelector(
  selectComp1Domain,
  (substate) => substate.toJS()
);

export default makeSelectComp1;
export {
  selectComp1Domain,
};
