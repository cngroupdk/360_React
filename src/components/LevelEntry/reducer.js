import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {
    REQUEST_LEVELS,
    RECEIVE_LEVELS,
    LEVEL_SAVE,
} from './actions';

const levelEntry = handleActions({
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

    [LEVEL_SAVE]: (state, action) => {
        return state.withMutations(newState =>
            newState
                .setIn(['level'], action.payload)
        );
    },
}, Immutable.fromJS({
    level: 'None listed',
    isLoaded: false,
    isError: false,
}));

export const getSelectedLevel = state =>
    state.get('level');

export default levelEntry;
