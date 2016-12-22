import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {
  RECEIVE_ANSWER,
} from './ReasonPageActions';

const reasonPage = handleActions({
  [RECEIVE_ANSWER]: {
    next(state) {
      return state.withMutations(newState => {
        newState
          .setIn(['isError'], false)
      });
    },
    throw(state) {
      return state.withMutations(newState =>
        newState
          .setIn(['isError'], true)
      );
    },
  },
}, Immutable.fromJS({
  isError: false,
}));

export default reasonPage;

export const reasonIsError = state => state.get('isError');
