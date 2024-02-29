import { PayloadAction } from "@reduxjs/toolkit";
import { delay, put, takeLatest } from "redux-saga/effects";
import { incrementSaga, incrementSagaSuccess } from "./counterSlice";

// export function* log(action: PayloadAction) {
//   console.log("Log", action);
// }

export function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log("Waiting 1s");
  yield delay(1000);

  console.log("Waiting done, dispatch action");

  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  // yield takeEvery(incrementSaga.type, handleIncrementSaga);
  yield takeLatest(incrementSaga.type, handleIncrementSaga);
}
