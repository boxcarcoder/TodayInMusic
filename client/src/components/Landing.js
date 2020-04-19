import React, { Fragment } from "react";

// redux
import { getAllAlbums } from "../actions/albums";

const Landing = ({ getAllAlbums }) => {
  const handleSubmit = (e) => {
    getAllAlbums();
  };

  return (
    <Fragment>
      <h1>Today In Music</h1>
      <button onClick={(e) => handleSubmit(e)}></button>
    </Fragment>
  );
};

export default connect(null, { getAllAlbums })(Landing);
