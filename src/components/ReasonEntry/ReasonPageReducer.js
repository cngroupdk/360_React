import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {
    RECEIVE_STEP,
    RECEIVE_PERSON,
} from './ReasonPageActions';

const reasonPageReducer = handleActions({
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
    nextStep: '',
    isLoaded: false,
    isError: false,
}));

export default reasonPageReducer;
