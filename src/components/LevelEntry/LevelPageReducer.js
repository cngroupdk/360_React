import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {
    REQUEST_LEVELS,
    RECEIVE_LEVELS,
    RECEIVE_STEP,
    RECEIVE_PERSON,
} from './LevelPageActions';

const levelPageReducer = handleActions({
    [REQUEST_LEVELS]: (state) => {
        return state.withMutations(newState =>
            newState
                .setIn(['isLoaded'], false)
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
                    .setIn(['isLoaded'], false)
                    .setIn(['isError'], true)
            );
        },
    },

    [RECEIVE_STEP]: {
        next(state, action) {
            return state.withMutations(newState => {
                newState
                    .setIn(['isError'], false)
                    .setIn(['nextStep'], action.payload.Step)
            });
        },
        throw(state) {
            return state.withMutations(newState =>
                newState
                    .setIn(['isError'], true)
            );
        },
    },

    [RECEIVE_PERSON]: {
        next(state, action) {
            return state.withMutations(newState => {
                newState
                    .setIn(['isError'], false)
                    .setIn(['person'], action.payload)
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
    person: 'Person',
    nextStep: 'default',
    isLoaded: false,
    isError: false,
}));

export default levelPageReducer;