import React, { Fragment } from "react";
//import "./App.css";
import "./scss/App.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Auth from "./components/layout/Auth";
import Albums from "./components/albums/Albums";

//redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={Auth} />
          <section className="container">
            <Switch>
              <Route exact path="/Landing" component={Landing} />
              <Route
                exact
                path="/Landing/?access_token=:token"
                component={Landing}
              />
              <Route exact path="/Albums" component={Albums} />
              <Route
                exact
                path="/Albums/?access_token=:token"
                component={Albums}
              />

              {/* <Route exact path="/MusicToday" component={MusicToday} />
              <Route
                exact
                path="/MusicTodayPersonalized"
                component={MusicTodayPersonalized}
              /> */}
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
