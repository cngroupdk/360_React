import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {
  REQUEST_LEVELS,
  RECEIVE_LEVELS,
  RECEIVE_ANSWER,
} from './LevelPageActions';

const levelPage = handleActions({
  [REQUEST_LEVELS]: (state) => {
    return state.withMutations(newState =>
      newState
        .setIn(['isError'], false)
    );
  },

  [RECEIVE_LEVELS]: {
    next(state, action) {
      return state.withMutations(newState => {
        newState
          .setIn(['isLoaded'], true)
          .setIn(['isError'], false)
          .setIn(['levels'], action.payload)
      });
    },
    throw(state) {
      return state.withMutations(newState =>
        newState
          .setIn(['isError'], true)
      );
    },
  },

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
  isLoaded: false,
  isError: false,
}));

export default levelPage;

export const getLevels = state => state.get('levels');
export const levelsIsLoaded = state => state.get('isLoaded');
export const levelsIsError = state => state.get('isError');
