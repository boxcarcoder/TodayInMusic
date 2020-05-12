import React, { Fragment } from "react";

const AlbumItem = ({ name, artist, img, url, date }) => {
  return (
    <Fragment>
      <p className="bg-dark">{date.slice(0, 4)}</p>
      <p>Artist: {artist}</p>
      <p>Album Name: {name}</p>
      <a href={url.spotify} target="_blank" rel="noopener noreferrer">
        <img src={img.url} width="200" height="200" alt="albumImg"></img>
      </a>
    </Fragment>
  );
};

export default AlbumItem;
