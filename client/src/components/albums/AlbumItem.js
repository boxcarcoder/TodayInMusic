import React, { Fragment } from "react";

const AlbumItem = ({ name, artist, img, url }) => {
  return (
    <Fragment>
      <p>name: {name}</p>
      <p>artist: {artist}</p>
      <a href={url.spotify} target="_blank" rel="noopener noreferrer">
        <img src={img.url} width={img.width} height={img.height}></img>
      </a>
    </Fragment>
  );
};

export default AlbumItem;
