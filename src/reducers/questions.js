import { RECEIVE_QUESTIONS, HANDEL_ANSWER_QUESTION, SAVE_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case HANDEL_ANSWER_QUESTION:
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
      case SAVE_QUESTION:

      return {state};
    default:
      return state;
  }
}
