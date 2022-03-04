import { takeLatest, put } from "redux-saga/effects";
import {
  GET_AMIGO,
  GET_AMIGO_SUCCESS,
  GET_AMIGO_ERROR,
} from "../actions/const";

import axios from "axios";

function* amigoWorker(action) {
  try {
    let payload = yield axios.post("http://localhost:3001/buscarUsuario",{tecler: action.payload});
    yield put({ type: GET_AMIGO_SUCCESS, payload: payload.data });
  } catch (error) {
    yield put({ type: GET_AMIGO_ERROR });
  }
}

function* amigoWacher() {
  yield takeLatest(GET_AMIGO, amigoWorker);
}

export { amigoWacher };
