import { createAction } from 'redux-actions';
import { apiPost } from '../../api';

import { getSelectedLevel } from '../LevelEntry/reducer';
import { getEnteredReason } from '../ReasonEntry/reducer';

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const requestQuestions = createAction(REQUEST_QUESTIONS);
export const receiveQuestions = createAction(RECEIVE_QUESTIONS);

export const fetchQuestions = (id) => {
    return (dispatch, getState) => {
        const level = getSelectedLevel(getState().get('levelEntry'));
        const reason = getEnteredReason(getState().get('reasonEntry'));
        dispatch(requestQuestions());
        return apiPost.post('assessments/save',
            {"Reason": reason, "PersonId" : id, "LevelId": level}).then(
            (response) => dispatch(receiveQuestions(
                response.data || response,
            )),
            (error) => dispatch(receiveQuestions(
                error,
            ))
        );
    };
};
