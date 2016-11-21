import {handleActions} from 'redux-actions';
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
        const users = state.get('peopleListDefault');
        console.log(action.payload)
        const searchPhrase = action.payload.toLowerCase();
        const filteredPeople = [];
        users.map((person) => {
            const nameToLowerCase = person.Name.toLowerCase();
            if (nameToLowerCase.includes(searchPhrase)) {
                filteredPeople.push(person);
            }
            return null;
        });

        return state.withMutations(newState => {
            newState
                .setIn(['peopleList'], filteredPeople);
        });
    },

    [RECEIVE_PEOPLE]: {
        next(state, action) {
            return state.withMutations(newState => {
                newState
                    .setIn(['isLoaded'], true)
                    .setIn(['isError'], false)
                    .setIn(['peopleList'], action.payload)
                    .setIn(['peopleListDefault'], action.payload);
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
