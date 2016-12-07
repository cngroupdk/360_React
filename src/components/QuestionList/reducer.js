import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {
    REQUEST_QUESTIONS,
    RECEIVE_QUESTIONS,
    UPDATE_ANSWER_DONT_SAY,
    UPDATE_ANSWER_COMMENT,
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
                    .setIn(['questionsList'], action.payload)
            });
        },
        throw(state) {
            return state.withMutations(newState =>
                newState
                    .setIn(['isError'], true)
            );
        },
    },

    [UPDATE_ANSWER_DONT_SAY]: (state, action) => {
        const answerId = action.payload.id;
        const dontSay = action.payload.dontSay;
        console.log(action);
        const questionsList = state.get('questionsList');
        return state.withMutations(newState => {
            newState
                .setIn(['test'], true);
        });
    },

    [UPDATE_ANSWER_COMMENT]: (state, action) => {
        return state.withMutations(newState => {
            newState
                .setIn(['test2'], true);
        });
    }

}, Immutable.fromJS({
    isLoaded: false,
    isError: false,
}));

export default questionsList;
