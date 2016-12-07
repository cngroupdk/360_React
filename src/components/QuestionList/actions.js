import { createAction } from 'redux-actions';
import { apiPost } from '../../api';

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const UPDATE_ANSWER_DONT_SAY = 'UPDATE_ANSWER_DONT_SAY';
export const UPDATE_ANSWER_COMMENT = 'UPDATE_ANSWER_COMMENT';

export const requestQuestions = createAction(REQUEST_QUESTIONS);
export const receiveQuestions = createAction(RECEIVE_QUESTIONS);

export const updateAnswerDontSay = createAction(UPDATE_ANSWER_DONT_SAY);
export const updateAnswerComment = createAction(UPDATE_ANSWER_COMMENT);

export const fetchQuestions = () => {
    return (dispatch) => {

        dispatch(requestQuestions());
        return apiPost.post('assessments/save',
            {"Reason": "", "PersonId" : 978, "LevelId": "0f96cee9-6869-4bb4-82a3-471355d2580c"}).then(
            (response) => dispatch(receiveQuestions(
                response.data || response,
            )),
            (error) => dispatch(receiveQuestions(
                error,
            ))
        );
    };
};
