import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {
    REQUEST_QUESTIONS,
    RECEIVE_QUESTIONS,
} from './actions';

const questionsList = handleActions({
    [REQUEST_QUESTIONS]: (state) => {
        return state.withMutations(newState =>
            newState
                .setIn(['isError'], false)
                .setIn(['isLoaded'], false)
        );
    },

    [RECEIVE_QUESTIONS]: {
        next(state, action) {
            return state.withMutations(newState => {
                newState
                    .setIn(['isError'], false)
                    .setIn(['isLoaded'], true)
                    .setIn(['questionsList'], action.payload.slice(1,5))
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

export default questionsList;
