import { createAction } from 'redux-actions';
import { api } from '../../api';

export const REQUEST_PEOPLE = 'REQUEST_PEOPLE';
export const RECEIVE_PEOPLE = 'RECEIVE_PEOPLE';
export const SEARCH_PEOPLE = 'SEARCH_PEOPLE';
export const REQUEST_COLLEAGUE = 'REQUEST_COLLEAGUE';
export const RECEIVE_COLLEAGUE = 'RECEIVE_COLLEAGUE';

export const requestPeople = createAction(REQUEST_PEOPLE);
export const receivePeople = createAction(RECEIVE_PEOPLE);
export const searchPeople = createAction(SEARCH_PEOPLE);
export const requestCollegue = createAction(REQUEST_COLLEAGUE);
export const receiveCollegue = createAction(RECEIVE_COLLEAGUE);

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


export const checkIfColleague = (userLogin) => {
    return (dispatch) => {
        dispatch(requestCollegue());
        return api.get('people/iscolleague/' + userLogin).then(
            (response) => dispatch(receiveCollegue(
                response.data || response,
            )),
            (error) => dispatch(receiveCollegue(
                error,
            ))
        );
    };
};
