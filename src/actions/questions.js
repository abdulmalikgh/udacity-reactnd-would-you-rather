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
export function addQuestionAnswer (users, questions) {
    return {
        type: ADD_QUESTION_ANSWER,
        users,
        questions
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
export function handleAddQuestionAnswer({authedUser, qid,answer}) {
    return (dispatch)=> {
        return saveQuestionAnswer({authedUser,qid,answer}).then((users,questions) => {
            dispatch(addQuestionAnswer(users,questions))
        })
    }
}