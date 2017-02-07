import { createAction } from 'redux-actions';

export const OPEN_CONFIRMATION_MODAL = 'OPEN_CONFIRMATION_MODAL';
export const CLOSE_CONFIRMATION_MODAL = 'CLOSE_CONFIRMATION_MODAL';

export const openConfirmationModal = createAction(OPEN_CONFIRMATION_MODAL);
export const closeConfirmationModal = createAction(CLOSE_CONFIRMATION_MODAL);

export const openModal = () => {
  return (dispatch) => {
    dispatch(openConfirmationModal());
  };
};

export const closeModal = () => {
  return (dispatch) => {
    dispatch(closeConfirmationModal());
  };
};
