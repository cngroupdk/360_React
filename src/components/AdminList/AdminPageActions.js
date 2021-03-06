import { createAction } from 'redux-actions';
import { api } from '../../api';

export const ADMIN_LIST_FETCH = 'ADMIN_LIST_FETCH';
export const ADMIN_LIST_FETCH_FINISHED = 'ADMIN_LIST_FETCH_FINISHED';
export const ADMIN_LIST_SAVE = 'ADMIN_LIST_SAVE';
export const ADMIN_LIST_SAVE_FINISHED = 'ADMIN_LIST_SAVE_FINISHED';

export const adminListFetch = createAction(ADMIN_LIST_FETCH);
export const adminListFetchFinished = createAction(ADMIN_LIST_FETCH_FINISHED);
export const adminListSave = createAction(ADMIN_LIST_SAVE);
export const adminListSaveFinished = createAction(ADMIN_LIST_SAVE_FINISHED);

export const fetchAdminList = () => {
  return (dispatch) => {
    dispatch(adminListFetch());
    return api.get('admin/levels').then(
      response => dispatch(adminListFetchFinished(
        response.data || response,
      )),
      error => dispatch(adminListFetchFinished(
        error,
      ))
    );
  };
};

