import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {
    REQUEST_PEOPLE,
    RECEIVE_PEOPLE,
    SEARCH_PEOPLE,
    RECEIVE_ASSESSMENT,
    REQUEST_ASSESSMENT,
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
        const searchPhrase = action.payload.toLowerCase().trim();
        const filteredPeople =  users.filter((person) => {
            return (person.Name.toLowerCase().includes(searchPhrase) ||
                person.SearchableName.toLowerCase().includes(searchPhrase))
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
    [REQUEST_ASSESSMENT]: (state) => {
        return state.withMutations(newState =>
            newState
                .setIn(['isError'], false)
        );
    },

    [RECEIVE_ASSESSMENT]:{
        next(state, action) {
            return state.withMutations(newState => {
                newState
                    .setIn(['isError'], false)
                    .setIn(['Assessment'])
            });
        },
        throw(state) {
            return state.withMutations(newState =>
                newState
                    .setIn(['isError'], true)
            );
        },
    }

}, Immutable.fromJS({
    isLoaded: false,
    isError: false,
}));

export default peopleList;
