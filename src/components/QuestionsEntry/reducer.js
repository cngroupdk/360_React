import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {
    SUBMIT_ANSWERS,
} from './actions';

const submitAssessment = handleActions({
    [SUBMIT_ANSWERS]: (state) => {
        return state.withMutations(newState =>
            newState
                .setIn(['isError'], false)
        );
    },

}, Immutable.fromJS({
    isLoaded: false,
    isError: false,
}));

export default submitAssessment;
