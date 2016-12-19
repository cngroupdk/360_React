import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
    REQUEST_TASKS,
    RECEIVE_TASKS,
    SEARCH_TASKS,
} from './TaskPageActions';

const taskPageReducer = handleActions({
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
          .setIn(['taskListDefault'], action.payload);
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

  [SEARCH_TASKS]: (state, action) => {
    const users = state.get('taskListDefault');
    const searchPhrase = action.payload.toLowerCase().trim();
    const filteredTask = users.filter((person) => {
      return (person.Name.toLowerCase().includes(searchPhrase) ||
      person.SearchableName.toLowerCase().includes(searchPhrase))
    });

    return state.withMutations(newState => {
      newState
        .setIn(['taskList'], filteredTask);
    });
  },
}, Immutable.fromJS({
  isLoaded: false,
  isError: false,
}));

export default taskPageReducer;
