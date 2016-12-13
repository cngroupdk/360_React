import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {
    ASSESSMENT_FETCH,
    ASSESSMENT_FETCH_FINISHED,
    ASSESSMENT_UPDATE_ANSWER,
} from './actions';

const questionsList = handleActions({
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
                    .setIn(['questionsList'], Immutable.fromJS(action.payload))
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
        const questionGroupId = action.payload.questionGroupId;
        const questionId = action.payload.questionId;
        const dontSay = action.payload.dontSay;

        const questionsList = state.get('questionsList');

        const modifiedQuestionsList =
            questionsList.updateIn(['Skills'], skills =>
                skills.map(skill => {
                    if (skill.get('Id') === questionGroupId) {
                        return skill.updateIn(['Questions'], questions =>
                            questions.map(question =>  {
                                if (question.get('Id') === questionId) {
                                    return question.setIn(['Answer', 'DontSay'], dontSay);
                                }
                                return question;
                            })
                        );
                    }
                    return skill;
                }));

        return state.withMutations(newState => {
            newState
                .setIn(['questionsList'], modifiedQuestionsList);
        });
    },

}, Immutable.fromJS({
    isLoaded: false,
    isError: false,
}));

export const getAllQuestions = state =>
    state.get('questionsList');

export default questionsList;
