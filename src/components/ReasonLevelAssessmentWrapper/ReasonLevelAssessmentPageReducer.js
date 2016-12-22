import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {
  RECEIVE_PERSON,
  RECEIVE_STEP,
} from './ReasonLevelAssessmentPageActions';

const reasonLevelAssessmentPage = handleActions({
  [RECEIVE_PERSON]: {
    next(state, action) {
      return state.withMutations(newState => {
        newState
          .setIn(['isError'], false)
          .setIn(['person'], Immutable.fromJS(action.payload))
      });
    },
    throw(state) {
      return state.withMutations(newState =>
        newState
          .setIn(['isError'], true)
      );
    },
  },

  [RECEIVE_STEP]: {
    next(state, action) {
      return state.withMutations(newState => {
        newState
          .setIn(['stepIsLoaded'], true)
          .setIn(['isError'], false)
          .setIn(['step'], Immutable.fromJS(action.payload))
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
  person: {Name: 'Person'},
  assessment: {},
  isLoaded: false,
  isError: false,
  stepIsLoaded: false,
}));

export default reasonLevelAssessmentPage;

export const getPerson = state => state.get('person');
export const getStep = state => state.get('step');
export const stepIsLoaded = state => state.get('stepIsLoaded');
