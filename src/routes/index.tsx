import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
const Main = React.lazy(() => import("../components/Form"));
const SuccessMessage = React.lazy(() => import("../components/SuccessMessage"));
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/success" component={SuccessMessage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
