export const RECEIVE_QUESTIONS = 'RECEIVE_QUESIONS';

export function receiveQuestions(question) {
    return {
        type: RECEIVE_QUESTIONS,
        question
    }
}