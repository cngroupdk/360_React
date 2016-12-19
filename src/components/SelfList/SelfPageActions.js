import { createAction } from 'redux-actions';
import { api } from '../../api';
import { getSelf } from '../Header/HeaderReducer';

export const REQUEST_SELFLIST = 'REQUEST_SELFLIST';
export const RECEIVE_SELFLIST = 'RECEIVE_SELFLIST';

export const requestSelfList = createAction(REQUEST_SELFLIST);
export const receiveSelfList = createAction(RECEIVE_SELFLIST);

export const fetchSelfList = () => {
  return (dispatch) => {
    dispatch(requestSelfList());
    return api.get('/assessments/self').then(
      (response) => dispatch(receiveSelfList(
        response.data || response,
      )),
      (error) => dispatch(receiveSelfList(
        error,
      ))
    );
  };
};

export const createSelfAssessment = (router) => {
  return (dispatch, getState) => {
    const myPersonId = getSelf(getState().get('headerReducer')).Id;
    return api.get('/assessments/create', {
      params: {
        personId: myPersonId
      }
    }).then(
      (response) => {
        router.push({
          pathname: '/' + response.data.Step.toLowerCase(),
          query: {personId: myPersonId}
        })
      },
      (error) => console.log(error)
    )
  }
};
