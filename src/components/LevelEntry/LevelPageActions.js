import { createAction } from 'redux-actions';
import { api } from '../../api';

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

export const sendLevel = (levelId, personId, router, nextStep) => {
  return (dispatch) => {
    api.post('/assessments/level', {
      'Level':{Id: levelId},
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



