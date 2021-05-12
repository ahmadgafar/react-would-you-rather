import { RECEIVE_QUESTIONS, ANSWER_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ANSWER_QUESTION:
      let { authedUser, qid, answer } = action;
      let temp = state[qid][answer];
      if (!temp.votes.includes(authedUser))
        temp.votes = temp.votes.concat(authedUser);
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: temp,
        },
      };
    default:
      return state;
  }
}
