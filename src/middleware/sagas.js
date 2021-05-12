import { call, put, takeLatest } from 'redux-saga/effects'
import {getInitialDataApi, answerQuestionApi} from '../utils/api'
import { setAuthedUser } from "../actions/authedUser";
import { receiveUsers } from "../actions/users";
import { receiveQuestions, handelAnswerQuestion, ANSWER_QUESTION } from "../actions/questions";
import {FETCH_DATA_REQUESTED} from '../actions/shared'

const AUTHED_ID = "tylermcginnis";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchDataSaga() {
   try {
      const {users, questions} = yield call(getInitialDataApi);
      yield put(receiveUsers(users));
      yield put(receiveQuestions(questions));
      yield put(setAuthedUser(AUTHED_ID));
   } catch (e) {
      yield put({type: "FETCH_DATA_FAILED", message: e.message});
   }
}

function* answerQuestionSaga(action) {
   try {
      const {authedUser, qid, answer} = action
      yield call(answerQuestionApi,authedUser, qid, answer);
      yield put(handelAnswerQuestion(authedUser, qid, answer));
   } catch (e) {
      console.log(e)
      yield put({type: "ANSWER_QUESTION_FAILED", message: e.message});
   }
}

function* sagas() {
   yield takeLatest(FETCH_DATA_REQUESTED, fetchDataSaga);
   yield takeLatest(ANSWER_QUESTION, answerQuestionSaga);
}

export default sagas;