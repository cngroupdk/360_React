import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
  REQUEST_VIEWERLIST,
  RECEIVE_VIEWERLIST,
} from './ViewerPageActions';

const viewerPageReducer = handleActions({
  [REQUEST_VIEWERLIST]: (state) => {
    return state.withMutations(newState =>
      newState
        .setIn(['isError'], false)
    );
  },
  [RECEIVE_VIEWERLIST]: {
    next(state, action) {
      return state.withMutations(newState => {
        newState
          .setIn(['isLoaded'], true)
          .setIn(['isError'], false)
          .setIn(['viewerList'], action.payload);
      });
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

export default viewerPageReducer;
