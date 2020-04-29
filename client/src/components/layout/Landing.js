import React, { Fragment } from "react";
import { Link } from "react-router-dom";

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
  const handleSubmit = (e, decade) => {
    let accessToken = obtainAccessToken();
    getAllAlbums(accessToken, decade);
  };

  return (
    <Fragment>
      <h1>Today In Music</h1>
      <div>
        <Link onClick={(e) => handleSubmit(e, 2010)} to="/Albums">
          2010-2019
        </Link>
      </div>
      <div>
        <Link onClick={(e) => handleSubmit(e, 2000)} to="/Albums">
          2000-2009
        </Link>
      </div>
    </Fragment>
  );
};

Landing.propTypes = {
  getAllAlbums: PropTypes.func.isRequired,
};

export default connect(null, { getAllAlbums })(Landing);
