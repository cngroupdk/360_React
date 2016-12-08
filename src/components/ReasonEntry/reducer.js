import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import { REASON_SAVE } from './actions';

const reasonEntry = handleActions({
    [REASON_SAVE]: (state, action) => {
        return state.withMutations(newState =>
            newState
                .setIn(['reason'], action.payload)
        );
    },
}, Immutable.fromJS({
    reason: 'None listed',
}));

export const getEnteredReason = state =>
    state.get('reason');

export default reasonEntry;
