import { createAction } from 'redux-actions';
import { api } from '../../api';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';

export const receiveAnswer = createAction(RECEIVE_ANSWER);

export const sendReason = (reason, personId, router) => {
  return (dispatch) => {
    api.post('/assessments/reason', {
      reason,
      personId,
    }).then(
      response => {

        dispatch(receiveAnswer(
          response.data || response,
        ));

        router.push({
          pathname: '/assessment/' + personId}
        )

      },
      error => dispatch(receiveAnswer(
        error,
      )))
  }
};




