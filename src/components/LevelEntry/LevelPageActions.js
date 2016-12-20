import { createAction } from 'redux-actions';
import { api, apiPost } from '../../api';

export const REQUEST_LEVELS = 'REQUEST_LEVELS';
export const RECEIVE_LEVELS = 'RECEIVE_LEVELS';
export const RECEIVE_STEP = 'RECEIVE_STEP';
export const RECEIVE_PERSON = 'RECEIVE_PERSON';

export const requestLevels = createAction(REQUEST_LEVELS);
export const receiveLevels = createAction(RECEIVE_LEVELS);
export const receiveStep = createAction(RECEIVE_STEP);
export const receivePerson = createAction(RECEIVE_PERSON);

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
      levelId,
      personId,
    }).then(
      response => {

        dispatch(receiveStep(
          response.data || response,
        ));

        router.push({
          pathname: '/' + response.data.Step.toLowerCase(),
          query: {personId: personId}
        })

      },
      error => dispatch(receiveStep(
        error,
      )))
  }
};

export const whoIs = (personId) => {
  return (dispatch) => {
    api.get('people/person', {
      params: {
        personId,
      }
    }).then(
      response => dispatch(receivePerson(
        response.data || response,
      )),
      error => dispatch(receivePerson(
        error,
      )))
  }
};



