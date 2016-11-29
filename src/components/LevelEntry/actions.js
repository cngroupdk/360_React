import { createAction } from 'redux-actions';
import { api } from '../../api';

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const requestQuestions = createAction(REQUEST_QUESTIONS);
export const receiveQuestions = createAction(RECEIVE_QUESTIONS);

export const fetchQuestions = () => {
    return (dispatch) => {
        dispatch(requestQuestions());
        return api.get('/assessments/save', {
            data: {
                PersonId: 976,
                Level: ''
            }}).then(
            (response) => dispatch(receiveQuestions(
                response.data || response,
            )),
            (error) => dispatch(receiveQuestions(
                error,
            ))
        );
    };
};
