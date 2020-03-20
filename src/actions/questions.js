export const RECEIVE_QUESTIONS = 'RECEIVE_QUESIONS';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}