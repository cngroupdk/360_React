import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {
  ADMIN_LIST_FETCH,
  ADMIN_LIST_FETCH_FINISHED,
} from './AdminPageActions';

const adminPage = handleActions({
  [ADMIN_LIST_FETCH]: (state) => {
    return state.withMutations(newState =>
      newState
        .setIn(['isError'], false)
        .setIn(['isLoaded'], false)
    );
  },

  [ADMIN_LIST_FETCH_FINISHED]: {
    next(state, action) {
      return state.withMutations(newState =>
        newState
          .setIn(['isError'], false)
          .setIn(['isLoaded'], true)
          .setIn(['adminList'], Immutable.fromJS(action.payload))
      );
    },
    throw(state) {
      return state.withMutations(newState =>
        newState
          .setIn(['isError'], true)
      );
    },
  },
}, Immutable.fromJS({
  isLoaded: false,
  isError: false,
}));

export default adminPage;

export const getAdminList = state => state.get('adminList');
export const adminListIsLoaded = state => state.get('isLoaded');
export const adminListIsError = state => state.get('isError');
