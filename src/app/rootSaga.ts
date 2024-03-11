import { authSaga } from "features/auth/authSaga";
import counterSaga from "../features/counter/CounterSaga";
import { all } from "redux-saga/effects";
import dashboardSaga from "features/dashboard/dashboardSaga";

export default function* rootSaga() {
  yield all([counterSaga(), authSaga(), dashboardSaga()]);
}
