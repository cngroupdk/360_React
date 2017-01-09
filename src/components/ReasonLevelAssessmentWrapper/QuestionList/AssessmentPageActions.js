import { createAction } from 'redux-actions';
import { api, apiPost } from '../../../api';

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
    return apiPost.get('assessments/detail/'+ personId).then(
      response => dispatch(assessmentRequestFinished(
        response.data || response,
      )),
      error => dispatch(assessmentRequestFinished(
        error,
      ))
    );
  };
};

export const saveAssessment = (personId, submitted) => {
  return (dispatch, getState) => {
    const assessment = getAssessment(getState().get('assessmentPage')).toJS();
    return apiPost.post('assessments/save',
      {
        personId,
        Level:assessment,
        Submitted: submitted,
      }
      ).then(
      response => dispatch(submittingStatus(
        submitted,
      )),
      error => dispatch(submittingStatus(
        error,
      ))
    );
  }
};

export const resetLevel = (personId) => {
  return (dispatch) => {
    dispatch(resetLevelSubmitted());
    api.get('assessments/resetlevel/'+ personId).then(
      response => dispatch(resetLevelFinished(
        response.data || response,
      )),
      error => dispatch(resetLevelFinished(
        error,
      )))
  }
};

export const checkIfSubmittable = () => {
  return (dispatch, getState) => {
    let ifSubmittable = [];
    const assessment = getAssessment(getState().get('assessmentPage'));
    if (assessment.size > 0) {
      assessment.get('Skills').first().get('Questions').toJS().map((question) => {
        ifSubmittable.push(!!question.Answer.Note);
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
