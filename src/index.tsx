import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store, persistor } from "./app/store";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { PersistGate } from "redux-persist/integration/react";
// import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
// import { history } from "utils";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        {/* <HistoryRouter history={history}>
        <App />
      </HistoryRouter> */}

        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
