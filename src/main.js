import React from "react";
import { Provider } from "react-redux";
import createRoutesWithStore from "./routes";
import { Route, Router, browserHistory } from "react-router";

const allRoutes = (
  <Route path="/">
    <Route component={...}>
      {createRoutesWithStore()}
    </Route>
  </Route>
);

export default class main extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={browserHistory}>{allRoutes}</Router>
        </Provider>
      </div>
    );
  }
}
