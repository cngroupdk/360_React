import { createAction } from 'redux-actions';
import { api } from '../../api';
import { getViewer } from '../AppHeader/AppHeaderReducer';

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
    const myPersonId = getViewer(getState().get('appHeader')).get('Id');
    return api.get('/assessments/create/' + myPersonId).then(
      () => {
        router.push({pathname: '/assessment/' + myPersonId})
      },
      error => console.log(error)
    )
  }
};
