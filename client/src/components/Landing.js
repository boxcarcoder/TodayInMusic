import React, { Fragment } from "react";

// redux
import { connect } from "react-redux";
import { getAllAlbums } from "../actions/albums";

const Landing = ({ getAllAlbums }) => {
  const handleSubmit = (e) => {
    // *** How can I send the access token (should or should not
    // be in the url as a params or query) as a getAllAlbums's request?
    // This will allow the getAllAlbums action to send the access
    // token as a request to the backend route. In the backend route
    // we can then use the access token in the call to Spotify's API.
    getAllAlbums();
  };

  return (
    <Fragment>
      <h1>Today In Music</h1>
      <button onClick={(e) => handleSubmit(e)}>Find Music!</button>
    </Fragment>
  );
};

export default connect(null, { getAllAlbums })(Landing);
