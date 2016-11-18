import { createAction } from 'redux-actions';
import { api } from '../../api';

export const REQUEST_PEOPLE = 'REQUEST_PEOPLE';
export const RECEIVE_PEOPLE = 'RECEIVE_PEOPLE';

export const requestPeople = createAction(REQUEST_PEOPLE);
export const receivePeople = createAction(RECEIVE_PEOPLE);

export const fetchPeople = () => {
    return (dispatch) => {
        dispatch(requestPeople());
        return api.get('/persons').then(
            (response) => dispatch(receivePeople(
                response.data || response,
            )),
            (error) => dispatch(receivePeople(
                error,
            ))
        );
    };
};
