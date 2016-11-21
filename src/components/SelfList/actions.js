import { createAction } from 'redux-actions';
import { api } from '../../api';

export const REQUEST_SELFLIST = 'REQUEST_SELFLIST';
export const RECEIVE_SELFLIST = 'RECEIVE_SELFLIST';

export const requestSelfList = createAction(REQUEST_SELFLIST);
export const receiveSelfList = createAction(RECEIVE_SELFLIST);

export const fetchSelfList = () => {
    return (dispatch) => {
        dispatch(requestSelfList());
        return api.get('/assessments/self').then(
            (response) => dispatch(receiveSelfList(
                response.data || response,
            )),
            (error) => dispatch(receiveSelfList(
                error,
            ))
        );
    };
};
