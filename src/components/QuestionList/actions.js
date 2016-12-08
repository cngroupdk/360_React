import { createAction } from 'redux-actions';
import { apiPost } from '../../api';

import { getSelectedLevel } from '../LevelEntry/reducer';
import { getEnteredReason } from '../ReasonEntry/reducer';
import { getAllQuestions } from './reducer';

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const POST_ASSESSMENT_AS_DRAFT = 'POST_ASSESSMENT_AS_DRAFT';
export const CONFIRM_POST_ASSESSMENT_AS_DRAFT = 'CONFIRM_POST_ASSESSMENT_AS_DRAFT';

export const UPDATE_ANSWER_DONT_SAY = 'UPDATE_ANSWER_DONT_SAY';
export const UPDATE_ANSWER_COMMENT = 'UPDATE_ANSWER_COMMENT';

export const requestQuestions = createAction(REQUEST_QUESTIONS);
export const receiveQuestions = createAction(RECEIVE_QUESTIONS);

export const updateAnswerDontSay = createAction(UPDATE_ANSWER_DONT_SAY);
export const updateAnswerComment = createAction(UPDATE_ANSWER_COMMENT);

export const postAssessmentAsDraft = createAction(POST_ASSESSMENT_AS_DRAFT);
export const confirmPostAssessmentAsDraft = createAction(CONFIRM_POST_ASSESSMENT_AS_DRAFT);

export const fetchQuestions = (id) => {
    return (dispatch, getState) => {
        const level = getSelectedLevel(getState().get('levelEntry'));
        const reason = getEnteredReason(getState().get('reasonEntry'));
        dispatch(requestQuestions());
        return apiPost.post('assessments/create',
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

export const saveAssessment = () => {
    return (dispatch, getState) => {
        const assessment = getAllQuestions(getState().get('questionsList')).toJS();
        dispatch(postAssessmentAsDraft());
        return apiPost.post('assessments/save',
            assessment).then(
            (response) => dispatch(confirmPostAssessmentAsDraft(
                response.data || response,
            )),
            (error) => dispatch(confirmPostAssessmentAsDraft(
                error,
            ))
        );
    }
};
