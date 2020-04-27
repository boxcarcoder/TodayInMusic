import React, { Fragment } from "react";

const AlbumItem = ({ name, artist }) => {
  return (
    <Fragment>
      <p>name: {name}</p>
      <p>artist: {artist}</p>
      {/* <p>img: {img}</p>
      <p>url: {url}</p> */}
    </Fragment>
  );
};

export default AlbumItem;
