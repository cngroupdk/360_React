import { createAction } from 'redux-actions';
import { api, apiPost } from '../../../api';

import { getAssessment } from './AssessmentPageReducer';

export const ASSESSMENT_FETCH = 'ASSESSMENT_FETCH';
export const ASSESSMENT_FETCH_FINISHED = 'ASSESSMENT_FETCH_FINISHED';

export const ASSESSMENT_SAVE = 'ASSESSMENT_SAVE';
export const ASSESSMENT_SAVE_FINISHED = 'ASSESSMENT_SAVE_FINISHED';

export const ASSESSMENT_UPDATE_ANSWER = 'ASSESSMENT_UPDATE_ANSWER';
export const ASSESSMENT_UPDATE_SUBMITTED = 'ASSESSMENT_UPDATE_SUBMITTED';

export const RESET_LEVEL_SUBMITTED = 'RESET_LEVEL_SUBMITTED';
export const RESET_LEVEL_FINISHED = 'RESET_LEVEL_FINISHED';

export const IS_SUBMITTABLE = 'IS_SUBMITTABLE';

export const assessmentRequest = createAction(ASSESSMENT_FETCH);
export const assessmentRequestFinished = createAction(ASSESSMENT_FETCH_FINISHED);

export const assessmentSave = createAction(ASSESSMENT_SAVE);
export const assessmentSaveFinished = createAction(ASSESSMENT_SAVE_FINISHED);

export const assessmentUpdateAnswer = createAction(ASSESSMENT_UPDATE_ANSWER);
export const assessmentUpdateSubmitted = createAction(ASSESSMENT_UPDATE_SUBMITTED);

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

export const saveAssessment = () => {
  return (dispatch, getState) => {
    const assessment = getAssessment(getState().get('assessmentPage')).toJS();
    dispatch(assessmentSave());
    return apiPost.post('assessments/save',
      assessment).then(
      response => dispatch(assessmentSaveFinished(
        response.data || response,
      )),
      error => dispatch(assessmentSaveFinished(
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
      assessment.get('Skills').last().get('Questions').toJS().map((question) => {
        ifSubmittable.push(!!question.Answer.Note);
        return null
      })}
    dispatch(isSubmittable(ifSubmittable.every(entry => entry)));
  };
};
