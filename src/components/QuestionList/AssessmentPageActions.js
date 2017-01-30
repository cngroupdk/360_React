import { createAction } from 'redux-actions';
import { api } from '../../api';

import { getAssessment } from './AssessmentPageReducer';

export const ASSESSMENT_FETCH = 'ASSESSMENT_FETCH';
export const ASSESSMENT_FETCH_FINISHED = 'ASSESSMENT_FETCH_FINISHED';

export const SUBMITTING_STATUS = 'SUBMITTING_STATUS';

export const ASSESSMENT_UPDATE_ANSWER = 'ASSESSMENT_UPDATE_ANSWER';

export const RESET_LEVEL_SUBMITTED = 'RESET_LEVEL_SUBMITTED';
export const RESET_LEVEL_FINISHED = 'RESET_LEVEL_FINISHED';

export const IS_SUBMITTABLE = 'IS_SUBMITTABLE';

export const assessmentRequest = createAction(ASSESSMENT_FETCH);
export const assessmentRequestFinished = createAction(ASSESSMENT_FETCH_FINISHED);

export const submittingStatus = createAction(SUBMITTING_STATUS);

export const assessmentUpdateAnswer = createAction(ASSESSMENT_UPDATE_ANSWER);

export const resetLevelSubmitted = createAction(RESET_LEVEL_SUBMITTED);
export const resetLevelFinished = createAction(RESET_LEVEL_FINISHED);

export const isSubmittable = createAction(IS_SUBMITTABLE);

export const fetchAssessment = (personId) => {
  return (dispatch) => {
    dispatch(assessmentRequest());
    return api.get('assessments/detail/'+ personId).then(
      response => dispatch(assessmentRequestFinished(
        response.data || response,
      )),
      error => dispatch(assessmentRequestFinished(
        error,
      ))
    );
  };
};

export const saveAssessment = (personId, submitted, router) => {
  return (dispatch, getState) => {
    const assessment = getAssessment(getState().get('assessmentPage')).toJS();
    return api.post('assessments/save',
      {
        personId,
        Level:assessment,
        Submitted: submitted,
      }
      ).then(
        response => {
        dispatch(submittingStatus(
          submitted,
        ));

        router.push({
          pathname: '/'}
        )
      },
      error => dispatch(submittingStatus(
        error,
      )))
  }
};

export const resetLevel = (personId, router,  nextStep) => {
  return (dispatch, getState) => {
    const assessment = getAssessment(getState().get('assessmentPage')).toJS();
    api.post('assessments/save',
    {
      personId,
      Level:assessment,
      Submitted: false,
    }
    ).then(
      response => {
        dispatch(resetLevelSubmitted());

        api.post('assessments/resetlevel', { personId }).then(
          response => {
            dispatch(resetLevelFinished(
              response.data || response,
            ));

            nextStep(personId, router)
          },
          error => dispatch(resetLevelFinished(
            error,
          ))
        )
      },
      error => dispatch(resetLevelSubmitted(
        error,
      ))
    )
  };
};

export const checkIfSubmittable = () => {
  return (dispatch, getState) => {
    let ifSubmittable = [];
    const assessment = getAssessment(getState().get('assessmentPage'));
    if (assessment.size > 0) {
      const skills = assessment.get('Skills');
      skills.map(skill => {
        skill.get('Questions').toJS().map((question) => {
          if (question.IsRequired) {
            ifSubmittable.push(!!question.Answer.Note);
          }
          return null
        });
        return null
      })}
    dispatch(isSubmittable(ifSubmittable.every(entry => entry)));
  };
};

export const resetSubmittingStatus = () => {
  return (dispatch) => {
    dispatch(submittingStatus(undefined));
  }
};
