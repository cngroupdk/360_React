import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {
    RECEIVE_STEP,
} from './actions';

const reasonEntry = handleActions({
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
}, Immutable.fromJS({
    nextStep: '',
    isLoaded: false,
    isError: false,
}));

export default reasonEntry;
