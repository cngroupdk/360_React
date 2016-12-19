import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
  REQUEST_SELFLIST,
  RECEIVE_SELFLIST,
} from './SelfPageActions';

const selfPageReducer = handleActions({
  [REQUEST_SELFLIST]: (state) => {
    return state.withMutations(newState =>
      newState
        .setIn(['isError'], false)
    );
  },
  [RECEIVE_SELFLIST]: {
    next(state, action) {
      return state.withMutations(newState => {
        newState
          .setIn(['isLoaded'], true)
          .setIn(['isError'], false)
          .setIn(['selfList'], action.payload);
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
  isLoaded: false,
  isError: false,
}));

export default selfPageReducer;
