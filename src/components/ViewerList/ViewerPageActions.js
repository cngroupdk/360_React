import { createAction } from 'redux-actions';
import { api } from '../../api';
import { getSelf } from '../AppHeader/AppHeaderReducer';

export const REQUEST_VIEWERLIST = 'REQUEST_VIEWERLIST';
export const RECEIVE_VIEWERLIST = 'RECEIVE_VIEWERLIST';

export const requestViewerList = createAction(REQUEST_VIEWERLIST);
export const receiveViewerList = createAction(RECEIVE_VIEWERLIST);

export const fetchViewerList = () => {
  return (dispatch) => {
    dispatch(requestViewerList());
    return api.get('/assessments/viewer').then(
      response => dispatch(receiveViewerList(
        response.data || response,
      )),
      error => dispatch(receiveViewerList(
        error,
      ))
    );
  };
};

export const createViewerAssessment = (router) => {
  return (dispatch, getState) => {
    const myPersonId = getSelf(getState().get('headerReducer')).Id;
    return api.get('/assessments/create', {
      params: {
        personId: myPersonId
      }
    }).then(
      response => {
        router.push({
          pathname: '/' + response.data.Step.toLowerCase(),
          query: {personId: myPersonId}
        })
      },
      error => console.log(error)
    )
  }
};