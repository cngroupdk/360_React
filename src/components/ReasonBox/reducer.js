import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import { REASON_SAVE } from './actions';

const reasonBox = handleActions({
    [REASON_SAVE]: (state, action) => {
        return state.withMutations(newState =>
            newState
                .setIn(['reason'], action.payload)
        );
    },
}, Immutable.fromJS({
    reason: '',
}));

export default reasonBox;
