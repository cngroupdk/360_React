import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {
    ASSESSMENT_FETCH,
    ASSESSMENT_FETCH_FINISHED,
    ASSESSMENT_UPDATE_ANSWER,
    ASSESSMENT_UPDATE_SUBMITTED,
    RECEIVE_PERSON,
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
          .setIn(['assessment'], Immutable.fromJS(action.payload))
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

  [ASSESSMENT_UPDATE_SUBMITTED]: (state, action) => {
    const assessment = state.get('assessment');
    const submitted = action.payload;
    const modifiedAssessment = assessment.setIn(['Submitted'], submitted);

    return state.withMutations(newState => {
      newState
        .setIn(['assessment'], modifiedAssessment);
    });
  },

  [RECEIVE_PERSON]: {
    next(state, action) {
      return state.withMutations(newState => {
        newState
          .setIn(['isError'], false)
          .setIn(['person'], action.payload)
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
  person: 'Person',
  assessment: {},
  isLoaded: false,
  isError: false,
}));

export default assessmentPage;

export const getAssessment = state => state.get('assessment');
export const getPerson = state => state.get('person');
export const assessmentIsLoaded = state => state.get('isLoaded');
export const assessmentIsError = state => state.get('isError');
