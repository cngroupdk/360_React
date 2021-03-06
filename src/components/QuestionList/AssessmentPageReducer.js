import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {
  ASSESSMENT_FETCH,
  ASSESSMENT_FETCH_FINISHED,
  ASSESSMENT_UPDATE_ANSWER,
  RESET_LEVEL_FINISHED,
  IS_SUBMITTABLE,
  SUBMITTING_STATUS,
} from './AssessmentPageActions';

const assessmentPage = handleActions({
  [ASSESSMENT_FETCH]: (state) => {
    return state.withMutations(newState =>
      newState
        .setIn(['isError'], false)
        .setIn(['isLoaded'], false)
    );
  },

  [ASSESSMENT_FETCH_FINISHED]: {
    next(state, action) {
      return state.withMutations(newState =>
        newState
          .setIn(['isError'], false)
          .setIn(['isLoaded'], true)
          .setIn(['assessment'], Immutable.fromJS(action.payload.Level))
      );
    },
    throw(state) {
      return state.withMutations(newState =>
        newState
          .setIn(['isError'], true)
      );
    },
  },

  [ASSESSMENT_UPDATE_ANSWER]: (state, action) => {
    const skillId = action.payload.skillId;
    const questionId = action.payload.questionId;
    const answerProperty = action.payload.answerProperty;
    const propertyValue = action.payload.propertyValue;

    const assessment = state.get('assessment');

    const modifiedAssessment =
      assessment.updateIn(['Skills'], skills =>
        skills.map(skill => {
          if (skill.get('Id') === skillId) {
            return skill.updateIn(['Questions'], questions =>
              questions.map(question => {
                if (question.get('Id') === questionId) {
                  return question.setIn(['Answer', answerProperty], propertyValue);
                }
                return question;
              })
            );
          }
          return skill;
        }));

    return state.withMutations(newState => {
      newState
        .setIn(['assessment'], modifiedAssessment);
    });
  },

  [RESET_LEVEL_FINISHED]: {
    next(state) {
      return state.withMutations(newState => {
        newState
          .setIn(['isError'], false)
          .setIn(['isLoaded'], true)
      });
    },
    throw(state) {
      return state.withMutations(newState =>
        newState
          .setIn(['isError'], true)
      );
    },
  },

  [IS_SUBMITTABLE]: {
    next(state, action) {
      return state.withMutations(newState => {
        newState
          .setIn(['isSubmittable'], action.payload)
      });
    },
    throw(state) {
      return state.withMutations(newState =>
        newState
          .setIn(['isError'], true)
      );
    },
  },
  [SUBMITTING_STATUS]: {
    next(state, action) {
      return state.withMutations(newState => {
        newState
          .setIn(['whatSubmitted'], action.payload)
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
  isSubmittable: false,
  assessment: {},
  isLoaded: false,
  isError: false,
}));

export default assessmentPage;

export const getAssessment = state => state.get('assessment');
export const getWhatSubmitted = state => state.get('whatSubmitted');
export const assessmentIsLoaded = state => state.get('isLoaded');
export const assessmentIsError = state => state.get('isError');
export const isSubmittable = state => state.get('isSubmittable');
