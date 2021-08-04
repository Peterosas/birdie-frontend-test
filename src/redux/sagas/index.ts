
import { delay } from "@redux-saga/core/effects";
import { put, takeEvery } from "@redux-saga/core/effects"


function* getRecipientsAsync() {
    yield delay(5000);
    yield put({type: "GET_RECIPIENTS_ASYNC", value: 1});
}

export default function* watchRootSaga() {
    yield takeEvery('GET_RECIPIENTS', getRecipientsAsync);
}

