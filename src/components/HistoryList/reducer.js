import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
    REQUEST_PEOPLE,
    RECEIVE_PEOPLE,
} from './actions';

const historyList = handleActions({
  [REQUEST_PEOPLE]: (state) => {
    return state.withMutations(newState =>
        newState
            .setIn(['isLoaded'], false)
            .setIn(['isError'], false)
    );
  },
  [RECEIVE_PEOPLE]: {
    next(state, action) {
      return state.withMutations(newState => {
        newState
            .setIn(['isLoaded'], true)
            .setIn(['isError'], false)
            .setIn(['historyPeople'], action.payload ? action.payload.slice(10, 20) : {});
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

export default historyList;
