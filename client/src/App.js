import React, { Fragment } from "react";
import "./App.css";

//redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment></Fragment>
    </Provider>
  );
};

export default App;
