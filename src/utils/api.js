import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from "./data.js";

export function getInitialDataApi() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function answerQuestionApi(authedUser, qid, answer) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
}

export function saveQuestionApi(question) {
  return _saveQuestion(question);
}
