import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";

//redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={Landing} />
          {/* <section className="container">
            <Switch>
              <Route exact path="/MusicToday" component={MusicToday} />
              <Route
                exact
                path="/MusicTodayPersonalized"
                component={MusicTodayPersonalized}
              />
            </Switch>
          </section> */}
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
