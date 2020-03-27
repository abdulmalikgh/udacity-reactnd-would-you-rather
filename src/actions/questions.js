import { saveQuestion,saveAnswerQuestion } from '../utils/api';
import { addAnswerToUser } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';


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
export function addAnswerToQuestion(authedUser,qid,answer) {
    return {
        type: ADD_ANSWER_TO_QUESTION,
        authedUser,
        qid,
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
/*
export function handleAddQuestionAnswer(authedUser, qid,answer) {
    return (dispatch)=> {
        dispatch(addAnswerToQuestion(authedUser,qid,answer))
        dispatch(addAnswerToUser(authedUser, qid, answer))
     return dispatch(saveAnswerQuestion(authedUser,qid,answer)).catch(err => {
         console.warn('An error occured')
     })
    }
}
*/