import { createAction } from 'redux-actions';
import { api } from '../../api';

export const REQUEST_PEOPLE = 'REQUEST_PEOPLE';
export const RECEIVE_PEOPLE = 'RECEIVE_PEOPLE';
export const SEARCH_PEOPLE = 'SEARCH_PEOPLE';
export const REQUEST_ASSESSMENT = 'REQUEST_ASSESSMENT';
export const RECEIVE_ASSESSMENT = 'RECEIVE_ASSESSMENT';

export const requestPeople = createAction(REQUEST_PEOPLE);
export const receivePeople = createAction(RECEIVE_PEOPLE);
export const searchPeople = createAction(SEARCH_PEOPLE);
export const requestAssessment = createAction(REQUEST_ASSESSMENT);
export const receiveAssessment = createAction(RECEIVE_ASSESSMENT);

export const fetchPeople = () => {
    return (dispatch) => {
        dispatch(requestPeople());
        return api.get('/people/all').then(
            (response) => dispatch(receivePeople(
                response.data || response,
            )),
            (error) => dispatch(receivePeople(
                error,
            ))
        );
    };
};
