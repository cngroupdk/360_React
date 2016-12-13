import { createAction } from 'redux-actions';
import { api } from '../../api';

export const REQUEST_LEVELS = 'REQUEST_LEVELS';
export const RECEIVE_LEVELS = 'RECEIVE_LEVELS';
export const LEVEL_SAVE = 'LEVEL_SAVE';

export const requestLevels = createAction(REQUEST_LEVELS);
export const receiveLevels = createAction(RECEIVE_LEVELS);

export const fetchLevels = () => {
    return (dispatch) => {
        dispatch(requestLevels());
        return api.get('/assessments/levels').then(
            (response) => dispatch(receiveLevels(
                response.data || response,
            )),
            (error) => dispatch(receiveLevels(
                error,
            ))
        );
    };
};