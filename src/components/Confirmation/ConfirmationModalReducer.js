import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import { OPEN_CONFIRMATION_MODAL, CLOSE_CONFIRMATION_MODAL } from './ConfrimationModalAction';

const confirmationModal = handleActions({
  [OPEN_CONFIRMATION_MODAL]: (state) => {
    return state.withMutations(newState => {
      newState
        .setIn(['isModalOpen'], true)
    });
  },
  [CLOSE_CONFIRMATION_MODAL]: (state) => {
    return state.withMutations(newState =>
      newState
        .setIn(['isModalOpen'], false)
    );
  },
}, Immutable.fromJS({
  isModalOpen: false,
}));

export default confirmationModal;

export const getModalState = state => state.get('isModalOpen');
