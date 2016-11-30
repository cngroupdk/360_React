import { createAction } from 'redux-actions';
import Axios from 'axios';

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const requestQuestions = createAction(REQUEST_QUESTIONS);
export const receiveQuestions = createAction(RECEIVE_QUESTIONS);

export const api = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    }
});

export const fetchQuestions = () => {
    return (dispatch) => {
        dispatch(requestQuestions());
        return api.get('/posts').then(
            (response) => dispatch(receiveQuestions(
                response.data || response,
            )),
            (error) => dispatch(receiveQuestions(
                error,
            ))
        );
    };
};
