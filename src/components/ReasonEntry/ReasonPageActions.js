import { createAction } from 'redux-actions';
import { api, apiPost } from '../../api';

export const RECEIVE_STEP = 'RECEIVE_STEP';
export const RECEIVE_PERSON = 'RECEIVE_PERSON';

export const receiveStep = createAction(RECEIVE_STEP);
export const receivePerson = createAction(RECEIVE_PERSON);

export const sendReason = (reason, personId) => {
    return (dispatch) => {
        apiPost.post('/assessments/reason', {
            reason,
            personId,
        }).then(
            (response) => dispatch(receiveStep(
                response.data || response,
            )),
            (error) => dispatch(receiveStep(
                error,
            )))
    }
};

export const whoIs = (personId) => {
    return (dispatch) => {
        api.get('people/person', { params: {
            personId,
        }}).then(
            (response) => dispatch(receivePerson(
                response.data || response,
            )),
            (error) => dispatch(receivePerson(
                error,
            )))
    }
};



