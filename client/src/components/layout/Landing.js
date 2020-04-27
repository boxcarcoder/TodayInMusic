import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { getAllAlbums } from "../../actions/albums";
import PropTypes from "prop-types";

const obtainAccessToken = () => {
  // obtain queries from the URL link redirected from the backend to Landing component.
  let queryParams = window.location.search;

  // parse the queries
  let params = new URLSearchParams(queryParams);

  // grab individual queries. We want the access_token query.
  let accessToken = params.get("access_token");

  return accessToken;
};

const Landing = ({ getAllAlbums }) => {
  const handleSubmit = (e) => {
    let accessToken = obtainAccessToken();
    getAllAlbums(accessToken);
    //return <Redirect to="/Albums" />;
  };

  return (
    <Fragment>
      <h1>Today In Music</h1>

      <Link onClick={(e) => handleSubmit(e)} to="/Albums">
        Find Music!
      </Link>
    </Fragment>
  );
};

Landing.propTypes = {
  getAllAlbums: PropTypes.func.isRequired,
};

export default connect(null, { getAllAlbums })(Landing);
