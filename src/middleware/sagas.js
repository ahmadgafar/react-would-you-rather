import { call, put, takeLatest } from 'redux-saga/effects'
import {getInitialData} from '../utils/api'
import { setAuthedUser } from "../actions/authedUser";
import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";


const AUTHED_ID = "tylermcginnis";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try {
      const {users, questions} = yield call(getInitialData);
      yield put(receiveUsers(users));
      yield put(receiveQuestions(questions));
      yield put(setAuthedUser(AUTHED_ID));
   } catch (e) {
      yield put({type: "FETCH_DATA_FAILED", message: e.message});
   }
}


function* sagas() {
  yield takeLatest("FETCH_DATA_REQUESTED", fetchUser);
}

export default sagas;