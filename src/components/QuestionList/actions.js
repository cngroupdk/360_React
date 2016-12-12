import { createAction } from 'redux-actions';
import { apiPost } from '../../api';

import { getSelectedLevel } from '../LevelEntry/reducer';
import { getEnteredReason } from '../ReasonEntry/reducer';
import { getAssessment } from './reducer';

export const ASSESSMENT_FETCH = 'ASSESSMENT_FETCH';
export const ASSESSMENT_FETCH_FINISHED = 'ASSESSMENT_FETCH_FINISHED';

export const ASSESSMENT_SAVE = 'ASSESSMENT_SAVE';
export const ASSESSMENT_SAVE_FINISHED = 'ASSESSMENT_SAVE_FINISHED';

export const ASSESSMENT_UPDATE_ANSWER = 'ASSESSMENT_UPDATE_ANSWER';
export const ASSESSMENT_UPDATE_SUBMITTED = 'ASSESSMENT_UPDATE_SUBMITTED';

export const assessmentRequest = createAction(ASSESSMENT_FETCH);
export const assessmentRequestFinished = createAction(ASSESSMENT_FETCH_FINISHED);

export const assessmentSave = createAction(ASSESSMENT_SAVE);
export const assessmentSaveFinished = createAction(ASSESSMENT_SAVE_FINISHED);

export const assessmentUpdateAnswer = createAction(ASSESSMENT_UPDATE_ANSWER);
export const assessmentUpdateSubmitted = createAction(ASSESSMENT_UPDATE_SUBMITTED);

export const fetchAssessment = (id) => {
    return (dispatch, getState) => {
        const level = getSelectedLevel(getState().get('levelEntry'));
        const reason = getEnteredReason(getState().get('reasonEntry'));
        dispatch(assessmentRequest());
        return apiPost.post('assessments/create',
            {"Reason": reason, "PersonId" : id, "LevelId": level}).then(
            (response) => dispatch(assessmentRequestFinished(
                response.data || response,
            )),
            (error) => dispatch(assessmentRequestFinished(
                error,
            ))
        );
    };
};

export const saveAssessment = () => {
    return (dispatch, getState) => {
        const assessment = getAssessment(getState().get('assessmentReducer')).toJS();
        dispatch(assessmentSave());
        return apiPost.post('assessments/save',
            assessment).then(
            (response) => dispatch(assessmentSaveFinished(
                response.data || response,
            )),
            (error) => dispatch(assessmentSaveFinished(
                error,
            ))
        );
    }
};
