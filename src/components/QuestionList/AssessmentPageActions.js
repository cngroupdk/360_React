import { createAction } from 'redux-actions';
import { api, apiPost } from '../../api';

import { getAssessment } from './AssessmentPageReducer';

export const ASSESSMENT_FETCH = 'ASSESSMENT_FETCH';
export const ASSESSMENT_FETCH_FINISHED = 'ASSESSMENT_FETCH_FINISHED';

export const ASSESSMENT_SAVE = 'ASSESSMENT_SAVE';
export const ASSESSMENT_SAVE_FINISHED = 'ASSESSMENT_SAVE_FINISHED';

export const ASSESSMENT_UPDATE_ANSWER = 'ASSESSMENT_UPDATE_ANSWER';
export const ASSESSMENT_UPDATE_SUBMITTED = 'ASSESSMENT_UPDATE_SUBMITTED';

export const RECEIVE_PERSON = 'RECEIVE_PERSON';

export const assessmentRequest = createAction(ASSESSMENT_FETCH);
export const assessmentRequestFinished = createAction(ASSESSMENT_FETCH_FINISHED);

export const assessmentSave = createAction(ASSESSMENT_SAVE);
export const assessmentSaveFinished = createAction(ASSESSMENT_SAVE_FINISHED);

export const assessmentUpdateAnswer = createAction(ASSESSMENT_UPDATE_ANSWER);
export const assessmentUpdateSubmitted = createAction(ASSESSMENT_UPDATE_SUBMITTED);

export const receivePerson = createAction(RECEIVE_PERSON);

export const fetchAssessment = (id) => {
    return (dispatch) => {
        dispatch(assessmentRequest());
        return apiPost.get('assessments/detail', {
            params: {
                id
            }}).then(
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
        const assessment = getAssessment(getState().get('assessmentPageReducer')).toJS();
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

export const whoIs = (assessmentId) => {
    return (dispatch) => {
        api.get('people/forassessment/', { params: {
            id: assessmentId,
        }}).then(
            (response) => dispatch(receivePerson(
                response.data || response,
            )),
            (error) => dispatch(receivePerson(
                error,
            )))
    }
};
