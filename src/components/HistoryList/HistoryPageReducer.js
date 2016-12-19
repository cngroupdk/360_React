import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
    REQUEST_HISTORY,
    RECEIVE_HISTORY,
} from './HistoryPageActions';

const historyPageReducer = handleActions({
  [REQUEST_HISTORY]: (state) => {
    return state.withMutations(newState =>
        newState
            .setIn(['isError'], false)
    );
  },
  [RECEIVE_HISTORY]: {
    next(state, action) {
      return state.withMutations(newState => {
        newState
            .setIn(['isLoaded'], true)
            .setIn(['isError'], false)
            .setIn(['historyList'], action.payload);
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

export default historyPageReducer;
