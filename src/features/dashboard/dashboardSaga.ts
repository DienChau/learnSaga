import { call, takeLatest } from "redux-saga/effects";
import { dashboardActions } from "./DashboardSlice";
import { all } from "axios";

function* fetchStatistics() {}

function* fetchHightestStudentList() {}

function* fetchLowestStudentList() {}

function* fetchRankingByCityList() {}

function* fetchDashboardData() {
  try {
    yield all([
      call(fetchStatistics),
      call(fetchHightestStudentList),
      call(fetchLowestStudentList),
      call(fetchRankingByCityList),
    ]);
  } catch (error) {
    console.log("Failed to fetch dashboard data", error);
  }
}

export default function* dashboardSaga() {
  yield takeLatest(dashboardActions.fetchData.type, fetchDashboardData);
}
