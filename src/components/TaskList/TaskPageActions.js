import { createAction } from 'redux-actions';
import { api } from '../../api';

export const REQUEST_TASKS = 'REQUEST_TASKS';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const SEARCH_TASKS = 'SEARCH_TASKS';

export const requestTasks = createAction(REQUEST_TASKS);
export const receiveTasks = createAction(RECEIVE_TASKS);
export const searchTasks = createAction(SEARCH_TASKS);

export const fetchTasks = () => {
  return (dispatch) => {
    dispatch(requestTasks());
    return api.get('/people/colleagues').then(
      response => dispatch(receiveTasks(
        response.data || response,
      )),
      error => dispatch(receiveTasks(
        error,
      ))
    );
  };
};

export const getFirstStep = (person, router) => {
  return () => {
    if (person.get('ExistingDraft') !== '') {
      router.push({
        pathname: '/assessment/' + person.get('Id')});
    } else {
      return api.get('/assessments/create/' + person.get('Id')).then(
        () => {
          router.push({
            pathname: '/assessment/' + person.get('Id')})
        },
        error => console.log(error),
      );
    }
  };
};
