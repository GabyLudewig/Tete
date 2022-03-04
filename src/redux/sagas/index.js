import { all } from "redux-saga/effects";
import { amigoWacher } from "./amigo";

function* rootSaga() {
    yield all([
        amigoWacher()
    ])
}

export {rootSaga}