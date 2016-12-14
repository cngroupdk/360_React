import { createAction } from 'redux-actions';
import { api, apiPost } from '../../api';

export const REQUEST_LEVELS = 'REQUEST_LEVELS';
export const RECEIVE_LEVELS = 'RECEIVE_LEVELS';
export const RECEIVE_STEP = 'RECEIVE_STEP';

export const requestLevels = createAction(REQUEST_LEVELS);
export const receiveLevels = createAction(RECEIVE_LEVELS);
export const receiveStep = createAction(RECEIVE_STEP);

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

export const sendLevel = (levelId, assessmentId) => {
    return (dispatch) => {
        apiPost.post('/assessments/level', {
            levelId,
            id: assessmentId,
        }).then(
            (response) => dispatch(receiveStep(
                response.data || response,
            )),
            (error) => dispatch(receiveStep(
                error,
            )))
    }
};



