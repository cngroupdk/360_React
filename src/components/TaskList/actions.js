import { createAction } from 'redux-actions';
import { api } from '../../api';

export const REQUEST_TASKS = 'REQUEST_TASKS';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';

export const requestTasks = createAction(REQUEST_TASKS);
export const receiveTasks = createAction(RECEIVE_TASKS);

export const fetchTasks = () => {
    return (dispatch) => {
        dispatch(requestTasks());
        return api.get('/people/colleagues').then(
            (response) => dispatch(receiveTasks(
                response.data || response,
            )),
            (error) => dispatch(receiveTasks(
                error,
            ))
        );
    };
};
