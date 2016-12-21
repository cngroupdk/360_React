import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
  REQUEST_HISTORY,
  RECEIVE_HISTORY,
} from './HistoryPageActions';

const historyPage = handleActions({
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
          .setIn(['historyList'], Immutable.fromJS(action.payload));
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

export default historyPage;

export const getHistory = state => state.get('historyList');
export const historyIsLoaded = state => state.get('isLoaded');
export const historyIsError = state => state.get('isError');
