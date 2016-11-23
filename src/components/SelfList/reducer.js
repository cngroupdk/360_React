import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
    REQUEST_SELFLIST,
    RECEIVE_SELFLIST,
} from './actions';

const selfList = handleActions({
  [REQUEST_SELFLIST]: (state) => {
    return state.withMutations(newState =>
        newState
            .setIn(['isLoaded'], false)
            .setIn(['isError'], false)
    );
  },
  [RECEIVE_SELFLIST]: {
    next(state, action) {
      console.log('self', action.payload)
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
              .setIn(['isLoaded'], false)
              .setIn(['isError'], true)
      );
    },
  },
}, Immutable.fromJS({
  isLoaded: false,
  isError: false,
}));

export default selfList;
