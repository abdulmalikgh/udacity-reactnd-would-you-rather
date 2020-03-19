import { 
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA';

export function getInitialData(users,questions){
 return Promise.all([
     _getUsers,
     _getQuestions
 ]).then( ({users, questions}) => {
     return {
         users,
         questions
        }
 })
};

export function saveQuestion(question) {
  return _saveQuestion(question)
}

export function saveQuestionAnswer(questionInfo){
 return _saveQuestionAnswer(questionInfo)
}