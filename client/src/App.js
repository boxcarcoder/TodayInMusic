import React, { Fragment } from "react";
import "./App.css";

//redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  const handleSubmit = (e) => {};

  return (
    <Provider store={store}>
      <Fragment>
        <h1>Today In Music</h1>
        <button onClick={(e) => handleSubmit(e)}></button>
      </Fragment>
    </Provider>
  );
};

export default App;
