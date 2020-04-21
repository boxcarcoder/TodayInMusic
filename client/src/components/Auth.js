import React, { Fragment } from "react";

const Auth = () => {
  return (
    <Fragment>
      <h1>Welcome to Today In Music!</h1>
      <p>
        This application uses the Spotify API to gather music. Please log on.
      </p>
      <a href="http://localhost:8888/">Authenticate</a>
    </Fragment>
  );
};

export default Auth;
