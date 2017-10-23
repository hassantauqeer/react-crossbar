
import { fromJS } from 'immutable';
import comp1Reducer from '../reducer';

describe('comp1Reducer', () => {
  it('returns the initial state', () => {
    expect(comp1Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
