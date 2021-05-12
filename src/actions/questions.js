export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const HANDEL_ANSWER_QUESTION = "HANDEL_ANSWER_QUESTION";
export const SAVE_QUESTION = "SAVE_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}


export function answerQuestion(authedUser, qid, answer ) {
  return {
    type: ANSWER_QUESTION,
    qid,
    authedUser,
    answer,
  };
}

export function handelAnswerQuestion(authedUser, qid, answer ) {
  return {
    type: HANDEL_ANSWER_QUESTION,
    qid,
    authedUser,
    answer,
  };
}


export function saveQuestion(optionOneText, optionTwoText, author) {
  let question = {optionOneText, optionTwoText, author}
  return {
    type: SAVE_QUESTION,
    question
  };
}