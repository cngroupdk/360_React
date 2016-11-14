import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
    REQUEST_PEOPLE,
    RECEIVE_PEOPLE,
    SEARCH_PEOPLE,
} from './actions';

const peopleList = handleActions({
  [REQUEST_PEOPLE]: (state) => {
    return state.withMutations(newState =>
        newState
            .setIn(['isLoaded'], false)
            .setIn(['isError'], false)
    );
  },

  [SEARCH_PEOPLE]: (state, action) => {
    const users = state.get('usersDefault');
    const searchPhrase = action.payload.toLowerCase();
    const filteredPeople= [];
    users.map((person, index) => {
      const nameToLowerCase = person.name.toLowerCase();
      if (nameToLowerCase.includes(searchPhrase)) {
        filteredPeople.push(person);
      }
      return null;
    });

    return state.withMutations(newState => {
      newState
          .setIn([ 'users' ], filteredPeople);
    });
  },

  [RECEIVE_PEOPLE]: {
    next(state, action) {
      function compare(a,b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }

      return state.withMutations(newState => {
        newState
            .setIn(['isLoaded'], true)
            .setIn(['isError'], false)
            .setIn(['users'], action.payload ? action.payload.sort(compare): {})
            .setIn(['usersDefault'], action.payload ? action.payload.sort(compare): {});
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

export default peopleList;
