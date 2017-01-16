import { createAction } from 'redux-actions';
import { api } from '../../api';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';

export const receiveAnswer = createAction(RECEIVE_ANSWER);

export const sendReason = (reason, personId, router, nextStep) => {
  return (dispatch) => {
    api.post('/assessments/reason', {
      reason,
      personId,
    }).then(
      response => {

        dispatch(receiveAnswer(
          response.data || response,
        ));

        nextStep(personId, router)

      },
      error => dispatch(receiveAnswer(
        error,
      )))
  }
};




