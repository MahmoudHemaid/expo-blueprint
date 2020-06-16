import { call, put, takeLatest, select } from "redux-saga/effects";
import { signInRoutine } from "../util/routines";
import { Api } from "../util/endpoints";
// import AuthorizedFetch from "../util/AuthorizedFetch";

function* signIn({ type, payload }) {
  try {
    // const result = yield* AuthorizedFetch(`${Api.SIGN_IN}`);
    yield put(signInRoutine.success());
  } catch (error) {
    yield put(signInRoutine.failure({ ...error }));
  } finally {
    yield put(signInRoutine.fulfill());
  }
}
export default [takeLatest(signInRoutine.TRIGGER, signIn)];
