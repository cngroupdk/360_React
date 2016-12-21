import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
  REQUEST_VIEWERLIST,
  RECEIVE_VIEWERLIST,
} from './ViewerPageActions';

const viewerPage = handleActions({
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
          .setIn(['viewerList'], Immutable.fromJS(action.payload));
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

export default viewerPage;

export const getViewerList = state => state.get('viewerList');
export const viewerListIsLoaded = state => state.get('isLoaded');
export const viewerListIsError = state => state.get('isError');
