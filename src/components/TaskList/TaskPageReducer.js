import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
    REQUEST_TASKS,
    RECEIVE_TASKS,
    SEARCH_TASKS,
} from './TaskPageActions';

const taskPage = handleActions({
  [REQUEST_TASKS]: (state) => {
    return state.withMutations(newState =>
      newState
        .setIn(['isError'], false)
    );
  },

  [RECEIVE_TASKS]: {
    next(state, action) {
      return state.withMutations(newState => {
        newState
          .setIn(['isLoaded'], true)
          .setIn(['isError'], false)
          .setIn(['taskList'], Immutable.fromJS(action.payload))
          .setIn(['taskListDefault'], Immutable.fromJS(action.payload));
      });
    },
    throw(state) {
      return state.withMutations(newState =>
        newState
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

export default taskPage;

export const getTask = state => state.get('taskList');
export const tasksIsLoaded = state => state.get('isLoaded');
export const tasksIsError = state => state.get('isError');
