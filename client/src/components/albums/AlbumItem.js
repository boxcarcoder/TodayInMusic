import React, { Fragment } from "react";

const AlbumItem = ({ name, artist, img, url }) => {
  return (
    <Fragment>
      <p>Artist: {artist}</p>
      <p>Album Name: {name}</p>
      <a href={url.spotify} target="_blank" rel="noopener noreferrer">
        <img src={img.url} width="150" height="150" alt="albumImg"></img>
      </a>
    </Fragment>
  );
};

export default AlbumItem;
