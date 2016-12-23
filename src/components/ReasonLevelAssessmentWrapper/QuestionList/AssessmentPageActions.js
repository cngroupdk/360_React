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

export const SAVE_VALIDATION_BOOL = 'SAVE_VALIDATION_BOOL';

export const assessmentRequest = createAction(ASSESSMENT_FETCH);
export const assessmentRequestFinished = createAction(ASSESSMENT_FETCH_FINISHED);

export const assessmentSave = createAction(ASSESSMENT_SAVE);
export const assessmentSaveFinished = createAction(ASSESSMENT_SAVE_FINISHED);

export const assessmentUpdateAnswer = createAction(ASSESSMENT_UPDATE_ANSWER);
export const assessmentUpdateSubmitted = createAction(ASSESSMENT_UPDATE_SUBMITTED);

export const resetLevelSubmitted = createAction(RESET_LEVEL_SUBMITTED);
export const resetLevelFinished = createAction(RESET_LEVEL_FINISHED);

export const saveValidationBool = createAction(SAVE_VALIDATION_BOOL);

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

export const submitValidation = (isNoteExists) => {
  return (dispatch) => {
      dispatch(saveValidationBool(isNoteExists))
  }
};

