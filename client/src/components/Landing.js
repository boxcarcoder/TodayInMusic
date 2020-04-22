import React, { Fragment } from "react";

// redux
import { connect } from "react-redux";
import { getAllAlbums } from "../actions/albums";

const Landing = ({ getAllAlbums }) => {
  const handleSubmit = (e) => {
    getAllAlbums(accessToken);
  };

  // obtain queries from the URL link redirected from the backend to Landing component.
  let queryParams = window.location.search;

  // parse the queries
  let params = new URLSearchParams(queryParams);

  // grab individual queries. We want the access_token query.
  let accessToken = params.get("access_token");

  return (
    <Fragment>
      <h1>Today In Music</h1>
      <button onClick={(e) => handleSubmit(e)}>Find Music!</button>
    </Fragment>
  );
};

export default connect(null, { getAllAlbums })(Landing);
