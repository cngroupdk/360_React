import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {
    REQUEST_QUESTIONS,
    RECEIVE_QUESTIONS,
    UPDATE_ANSWER_DONT_SAY,
    UPDATE_ANSWER_COMMENT,
} from './actions';

const questionsList = handleActions({
    // QUESTION_LIST.QUESTIONS_FETCH
    [REQUEST_QUESTIONS]: (state) => {
        return state.withMutations(newState =>
            newState
                .setIn(['isError'], false)
                .setIn(['isLoaded'], false)
        );
    },

    // QUESTION_LIST.QUESTIONS_FETCH.FINISHED
    [RECEIVE_QUESTIONS]: {
        next(state, action) {
            console.log(action.payload);
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
    // QUESTION_LIST.SET_QUESTION_VALUE
    [UPDATE_ANSWER_DONT_SAY]: (state, action) => {
        const questionGroupId = action.payload.questionGroupId;
        const questionId = action.payload.questionId;
        const dontSay = action.payload.dontSay;

        const questionsList = state.get('questionsList');

        const modifiedQuestionsList =
            questionsList.updateIn(['Skills'], skills =>
                skills.map(skill => {
                    if (skill.get('Id') == questionGroupId) {
                        return skill.updateIn(['Questions'], questions =>
                            questions.map(question =>  {
                                if (question.get('Id') == questionId) {
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

    [UPDATE_ANSWER_COMMENT]: (state, action) => {
        return state.withMutations(newState => {
            newState
                .setIn(['test2'], true);
        });
    }

}, Immutable.fromJS({
    isLoaded: false,
    isError: false,
}));

export const getAllQuestions = state =>
    state.get('questionsList');

export default questionsList;
