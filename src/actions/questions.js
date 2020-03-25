import { saveQuestion,saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion(question){
    return {
        type : ADD_QUESTION,
          question
    }
}
export function addQuestionAnswer (authedUser,qid,answer) {
    return {
        type: ADD_QUESTION_ANSWER,
        qid,
        authedUser,
        answer
    }
}
export function handleAddQuestion(optionOneText, optionTwoText){
    return (dispatch, getState )=> {
        const { authedUser } = getState();
        const question = {
            optionOneText,
            optionTwoText,
            author : authedUser
        }
        return saveQuestion(question).then( question => {
            dispatch(addQuestion(question))
        }).catch( err => {
            alert('An Error occured', err)
        })
        
      }
}
export function handleAddQuestionAnswer(authedUser, qid,answer) {
    return (dispatch)=> {
        return saveQuestionAnswer( authedUser,qid,answer  ).then(({authedUser,qid,answer})=> {
            dispatch(addQuestionAnswer(authedUser,qid,answer))
        })
    }
}