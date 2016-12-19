import { createAction } from 'redux-actions';
import { api } from '../../api';

export const REQUEST_HISTORY = 'REQUEST_HISTORY';
export const RECEIVE_HISTORY = 'RECEIVE_HISTORY';

export const requestHistory = createAction(REQUEST_HISTORY);
export const receiveHistory = createAction(RECEIVE_HISTORY);

export const fetchHistory = () => {
  return (dispatch) => {
    dispatch(requestHistory());
    return api.get('/assessments/history').then(
      response => dispatch(receiveHistory(
        response.data || response,
      )),
      error => dispatch(receiveHistory(
        error,
      ))
    );
  };
};
