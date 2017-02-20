import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
  CLOSE_CONFIRMATION_MODAL,
  DECLINE_CONFIRMATION_MODAL,
  OPEN_CONFIRMATION_MODAL,
  PROCEED_CONFIRMATION_MODAL,
} from './ConfrimationModalAction';

const confirmationModal = handleActions({
  [OPEN_CONFIRMATION_MODAL]: (state) => {
    return state.withMutations(newState => {
      newState
        .setIn(['isModalOpen'], true)
    });
  },
  [CLOSE_CONFIRMATION_MODAL]: (state) => {
    return state.withMutations(newState => {
      newState
        .setIn(['isModalOpen'], false)
    });
  },
  [PROCEED_CONFIRMATION_MODAL]: (state) => {
    return state.withMutations(newState => {
      newState
        .setIn(['isModalProceeded'], true)
    });
  },
  [DECLINE_CONFIRMATION_MODAL]: (state) => {
    return state.withMutations(newState => {
      newState
        .setIn(['isModalProceeded'], false)
    });
  },
}, Immutable.fromJS({
  isModalOpen: false,
  isModalProceeded: false,
}));

export default confirmationModal;

export const getModalState = state => state.get('isModalOpen');
export const modalIsProceeded = state => state.get('isModalProceeded');
