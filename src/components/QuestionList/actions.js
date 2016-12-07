import { createAction } from 'redux-actions';
import { apiPost } from '../../api';

import { getSelectedLevel } from '../LevelEntry/reducer';
import { getEnteredReason } from '../ReasonEntry/reducer';

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const UPDATE_ANSWER_DONT_SAY = 'UPDATE_ANSWER_DONT_SAY';
export const UPDATE_ANSWER_COMMENT = 'UPDATE_ANSWER_COMMENT';

export const requestQuestions = createAction(REQUEST_QUESTIONS);
export const receiveQuestions = createAction(RECEIVE_QUESTIONS);

export const fetchQuestions = (id) => {
export const updateAnswerDontSay = createAction(UPDATE_ANSWER_DONT_SAY);
export const updateAnswerComment = createAction(UPDATE_ANSWER_COMMENT);

export const fetchQuestions = () => {
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
