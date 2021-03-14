import { Suspense } from "react";
import * as ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducer";
import CircularProgress from "@material-ui/core/CircularProgress";
import App from "./App";
import "./index.css";
const store = createStore(rootReducer);
ReactDom.render(
  <Provider store={store}>
    <Suspense
      fallback={
        <div className="loader">
          <CircularProgress />
        </div>
      }
    >
      <App />
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
