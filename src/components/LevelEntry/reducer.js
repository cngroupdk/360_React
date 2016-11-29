import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {
    REQUEST_QUESTIONS,
    RECEIVE_QUESTIONS,
} from './actions';

const levelEntry = handleActions({
    [REQUEST_QUESTIONS]: (state) => {
        return state.withMutations(newState =>
            newState
                .setIn(['isError'], false)
        );
    },

    [RECEIVE_QUESTIONS]: {
        next(state, action) {
            console.log(action.payload)
            return state.withMutations(newState => {
                newState
                    .setIn(['isError'], false)
                    .setIn(['questions'], 1)
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

export default levelEntry;
