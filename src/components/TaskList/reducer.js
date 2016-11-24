import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
    REQUEST_TASKS,
    RECEIVE_TASKS,
} from './actions';

const taskList = handleActions({
  [REQUEST_TASKS]: (state) => {
    return state.withMutations(newState =>
        newState
            .setIn(['isLoaded'], false)
            .setIn(['isError'], false)
    );
  },
  [RECEIVE_TASKS]: {
    next(state, action) {
      return state.withMutations(newState => {
        newState
            .setIn(['isLoaded'], true)
            .setIn(['isError'], false)
            .setIn(['taskList'], action.payload)
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

export default taskList;
