import { createAction } from 'redux-actions';
import { apiPost } from '../../api';

export const RECEIVE_STEP = 'RECEIVE_STEP';

export const receiveStep = createAction(RECEIVE_STEP);

export const sendReason = (reason, assessmentId) => {
    return (dispatch) => {
        apiPost.post('/assessments/reason', {
            reason,
            id: assessmentId,
        }).then(
            (response) => dispatch(receiveStep(
                response.data || response,
            )),
            (error) => dispatch(receiveStep(
                error,
            )))
    }
};



