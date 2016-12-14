import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
    REQUEST_SELF,
    RECEIVE_SELF,
} from './actions';

const self = handleActions({
  [REQUEST_SELF]: (state) => {
    return state.withMutations(newState =>
        newState
            .setIn(['isLoaded'], false)
            .setIn(['isError'], false)
    );
  },
  [RECEIVE_SELF]: {
    next(state, action) {
      return state.withMutations(newState => {
        newState
            .setIn(['isLoaded'], true)
            .setIn(['isError'], false)
            .setIn(['self'], action.payload);
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

export const getSelf = state =>
    state.get('self');

export default self;
