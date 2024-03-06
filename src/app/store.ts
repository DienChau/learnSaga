import { Action, ThunkAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/authSlice";
import createSagaMiddleware from "redux-saga";
import counterReducer from "../features/counter/counterSlice";
import rootSaga from "./rootSaga";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
