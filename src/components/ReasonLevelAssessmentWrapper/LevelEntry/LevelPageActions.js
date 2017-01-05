import { createAction } from 'redux-actions';
import { api, apiPost } from '../../../api';

export const REQUEST_LEVELS = 'REQUEST_LEVELS';
export const RECEIVE_LEVELS = 'RECEIVE_LEVELS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';

export const requestLevels = createAction(REQUEST_LEVELS);
export const receiveLevels = createAction(RECEIVE_LEVELS);
export const receiveAnswer = createAction(RECEIVE_ANSWER);

export const fetchLevels = () => {
  return (dispatch) => {
    dispatch(requestLevels());
    return api.get('/assessments/levels').then(
      response => dispatch(receiveLevels(
        response.data || response,
      )),
      error => dispatch(receiveLevels(
        error,
      ))
    );
  };
};

export const sendLevel = (levelId, personId, router) => {
  return (dispatch) => {
    apiPost.post('/assessments/level', {
      'Level':{Id: levelId},
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



