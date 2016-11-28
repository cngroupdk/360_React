import { createAction } from 'redux-actions';
import { api } from '../../api';

export const SUBMIT_ANSWERS = 'SUBMIT_ANSWERS';

export const submitAnswers = createAction(SUBMIT_ANSWERS);

export const submitAssessment = () => {
    return (dispatch) => {
        dispatch(submitAnswers());
        return api.post('/').then(
            dispatch(submitAnswers(
                response.data || response,
            )),
        );
    };
};
