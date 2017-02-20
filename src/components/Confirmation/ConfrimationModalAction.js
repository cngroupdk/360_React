import { createAction } from 'redux-actions';

export const OPEN_CONFIRMATION_MODAL = 'OPEN_CONFIRMATION_MODAL';
export const CLOSE_CONFIRMATION_MODAL = 'CLOSE_CONFIRMATION_MODAL';
export const PROCEED_CONFIRMATION_MODAL = 'PROCEED_CONFIRMATION_MODAL';
export const DECLINE_CONFIRMATION_MODAL = 'DECLINE_CONFIRMATION_MODAL';

export const openConfirmationModal = createAction(OPEN_CONFIRMATION_MODAL);
export const closeConfirmationModal = createAction(CLOSE_CONFIRMATION_MODAL);
export const proceedConfirmationModal = createAction(PROCEED_CONFIRMATION_MODAL);
export const declineConfirmationModal = createAction(DECLINE_CONFIRMATION_MODAL);

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

export const proceedModal = () => {
  return (dispatch) => {
    dispatch(proceedConfirmationModal());
  };
};

export const declineModal = () => {
  return (dispatch) => {
    dispatch(declineConfirmationModal());
  };
}
