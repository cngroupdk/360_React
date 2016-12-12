import { createAction } from 'redux-actions';
import { apiPost } from '../../api';

import { getAllQuestions } from './reducer';

export const ASSESSMENT_FETCH = 'ASSESSMENT_FETCH';
export const ASSESSMENT_FETCH_FINISHED = 'ASSESSMENT_FETCH_FINISHED';

export const ASSESSMENT_SAVE = 'ASSESSMENT_SAVE';
export const ASSESSMENT_SAVE_FINISHED = 'ASSESSMENT_SAVE_FINISHED';

export const ASSESSMENT_UPDATE_ANSWER = 'ASSESSMENT_UPDATE_ANSWER';

export const assessmentRequest = createAction(ASSESSMENT_FETCH);
export const assessmentRequestFinished = createAction(ASSESSMENT_FETCH_FINISHED);

export const assessmentSave = createAction(ASSESSMENT_SAVE);
export const assessmentSaveFinished = createAction(ASSESSMENT_SAVE_FINISHED);

export const assessmentUpdateAnswer = createAction(ASSESSMENT_UPDATE_ANSWER);

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
        const assessment = getAllQuestions(getState().get('questionsList')).toJS();
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
