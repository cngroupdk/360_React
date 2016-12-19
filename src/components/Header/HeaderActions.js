import { createAction } from 'redux-actions';
import { api } from '../../api';

export const REQUEST_SELF = 'REQUEST_SELF';
export const RECEIVE_SELF = 'RECEIVE_SELF';

export const requestSelf = createAction(REQUEST_SELF);
export const receiveSelf = createAction(RECEIVE_SELF);

export const fetchSelf = () => {
  return (dispatch) => {
    dispatch(requestSelf());
    return api.get('/people/me').then(
      (response) => dispatch(receiveSelf(
        response.data || response,
      )),
      (error) => dispatch(receiveSelf(
        error,
      ))
    );
  };
};
