import { takeLatest, put } from "redux-saga/effects";
import { SAVE_QUOTE, SAVED_QUOTE, SAVE_QUOTE_ERROR } from "../actions/const";

function* quotesWorker() {
  try {
    yield put({ type: SAVED_QUOTE });
  } catch (error) {
    yield put({ type: SAVE_QUOTE_ERROR, error });
  }
}

function* quotesWacher() {
  yield takeLatest(SAVE_QUOTE, quotesWorker);
}

export { quotesWacher };