import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {
  REQUEST_PEOPLE,
  RECEIVE_PEOPLE,
  SEARCH_PEOPLE,
} from './PeoplePageActions';

const peoplePage = handleActions({
  [REQUEST_PEOPLE]: (state) => {
    return state.withMutations(newState =>
      newState
        .setIn(['isError'], false)
    );
  },

  [RECEIVE_PEOPLE]: {
    next(state, action) {
      return state.withMutations(newState => {
        newState
          .setIn(['isLoaded'], true)
          .setIn(['isError'], false)
          .setIn(['peopleList'], Immutable.fromJS(action.payload))
          .setIn(['peopleListDefault'], Immutable.fromJS(action.payload))
      });
    },
    throw(state) {
      return state.withMutations(newState =>
        newState
          .setIn(['isError'], true)
      );
    },
  },

  [SEARCH_PEOPLE]: (state, action) => {
    const users = state.get('peopleListDefault');
    const searchPhrase = action.payload.toLowerCase().trim();
    const filteredPeople = users.filter((person) => {
      return (person.get('Name').toLowerCase().includes(searchPhrase) ||
      person.get('SearchableName').toLowerCase().includes(searchPhrase))
    });

    return state.withMutations(newState => {
      newState
        .setIn(['peopleList'], filteredPeople);
    });
  },
}, Immutable.fromJS({
  isLoaded: false,
  isError: false,
}));

export default peoplePage;

export const getPeople = state => state.get('peopleList');
export const peopleIsLoaded = state => state.get('isLoaded');
export const peopleIsError = state => state.get('isError');
