import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
  REQUEST_SELF,
  RECEIVE_SELF,
} from './AppHeaderActions';

const appHeader = handleActions({
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
          .setIn(['viewer'], Immutable.fromJS(action.payload));
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

export default appHeader;

export const getViewer = state => state.get('viewer');
export const viewerIsLoaded = state => state.get('isLoaded');
export const viewerIsError = state => state.get('isError');


