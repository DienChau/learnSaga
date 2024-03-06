import { createBrowserHistory, BrowserHistory } from "history";

interface CustomBrowserHistory extends BrowserHistory {
  createURL?: any;
  encodeLocation?: any;
}

export const history: CustomBrowserHistory = createBrowserHistory();
