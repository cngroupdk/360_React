import { createAction } from 'redux-actions';
import { apiPost } from '../../api';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';

export const receiveAnswer = createAction(RECEIVE_ANSWER);

export const sendReason = (reason, personId, router) => {
  return (dispatch) => {
    apiPost.post('/assessments/reason', {
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




