import { createAction } from 'redux-actions';
import { api } from '../../api';

export const RECEIVE_PERSON = 'RECEIVE_PERSON';
export const RECEIVE_STEP = 'RECEIVE_STEP';

export const receivePerson = createAction(RECEIVE_PERSON);
export const receiveStep = createAction(RECEIVE_STEP);

export const whoIs = (personId) => {
  return (dispatch) => {
    api.get('people/person/'+ personId).then(
      response => dispatch(receivePerson(
        response.data || response,
      )),
      error => dispatch(receivePerson(
        error,
      )))
  }
};

export const getNextStep = (personId) => {
  return (dispatch) => {
    return api.get('assessments/step/'+ personId).then(
      response => dispatch(receiveStep(
        response.data || response,
      )),
      error => dispatch(receiveStep(
        error,
      )))
  }
};
