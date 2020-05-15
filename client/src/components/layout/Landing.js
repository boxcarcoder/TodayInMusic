import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { getAllAlbums } from "../../actions/albums";
import PropTypes from "prop-types";
import { storeAccessToken } from "../../actions/auth";

const obtainAccessToken = () => {
  // obtain queries from the URL link redirected from the backend to Landing component.
  let queryParams = window.location.search;

  // parse the queries
  let params = new URLSearchParams(queryParams);

  // grab individual queries. We want the access_token query.
  let accessToken = params.get("access_token");

  return accessToken;
};

const Landing = ({ getAllAlbums, storeAccessToken }) => {
  // Fetch token from URL query.
  let accessToken = obtainAccessToken();

  // Store the access token into a redux state.
  storeAccessToken(accessToken);

  const handleSubmit = (e, decade) => {
    getAllAlbums(accessToken, decade);
  };

  return (
    <Fragment>
      <h1>Today In Music</h1>
      <div>
        <Link
          onClick={(e) => handleSubmit(e, 2010)}
          to={{ pathname: `/Albums/?access_token=${accessToken}` }}
        >
          2010-2019
        </Link>
      </div>
      <div>
        <Link
          onClick={(e) => handleSubmit(e, 2000)}
          to={{ pathname: `/Albums/?access_token=${accessToken}` }}
        >
          2000-2009
        </Link>
      </div>
      <div>
        <Link
          onClick={(e) => handleSubmit(e, 1990)}
          to={{ pathname: `/Albums/?access_token=${accessToken}` }}
        >
          1990-1999
        </Link>
      </div>
      <div>
        <Link
          onClick={(e) => handleSubmit(e, 1980)}
          to={{ pathname: `/Albums/?access_token=${accessToken}` }}
        >
          1980-1989
        </Link>
      </div>
      <div>
        <Link
          onClick={(e) => handleSubmit(e, 1970)}
          to={{ pathname: `/Albums/?access_token=${accessToken}` }}
        >
          1970-1979
        </Link>
      </div>
      <div>
        <Link
          onClick={(e) => handleSubmit(e, 1960)}
          to={{ pathname: `/Albums/?access_token=${accessToken}` }}
        >
          1960-1969
        </Link>
      </div>
      <div>
        <Link
          onClick={(e) => handleSubmit(e, 1950)}
          to={{ pathname: `/Albums/?access_token=${accessToken}` }}
        >
          1950-1959
        </Link>
      </div>
      <div>
        <Link
          onClick={(e) => handleSubmit(e, 1940)}
          to={{ pathname: `/Albums/?access_token=${accessToken}` }}
        >
          1940-1949
        </Link>
      </div>
      <div>
        <Link
          onClick={(e) => handleSubmit(e, 1930)}
          to={{ pathname: `/Albums/?access_token=${accessToken}` }}
        >
          1930-1939
        </Link>
      </div>
      <div>
        <Link
          onClick={(e) => handleSubmit(e, 1920)}
          to={{ pathname: `/Albums/?access_token=${accessToken}` }}
        >
          1920-1929
        </Link>
      </div>
      <div>
        <Link
          onClick={(e) => handleSubmit(e, 1910)}
          to={{ pathname: `/Albums/?access_token=${accessToken}` }}
        >
          1910-1919
        </Link>
      </div>
      <div>
        <Link
          onClick={(e) => handleSubmit(e, 1900)}
          to={{ pathname: `/Albums/?access_token=${accessToken}` }}
        >
          1900-1909
        </Link>
      </div>
    </Fragment>
  );
};

Landing.propTypes = {
  getAllAlbums: PropTypes.func.isRequired,
  storeAccessToken: PropTypes.func.isRequired,
};

export default connect(null, { getAllAlbums, storeAccessToken })(Landing);
