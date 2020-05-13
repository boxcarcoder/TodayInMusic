import React, { Fragment } from "react";

const AlbumItem = ({ name, artist, img, url, date }) => {
  return (
    <Fragment>
      <div className="albumObj">
        <p className="bg-dark">{date.slice(0, 4)}</p>
        <p>Artist: {artist}</p>
        <p>Album Name: {name}</p>
        <a href={url.spotify} target="_blank" rel="noopener noreferrer">
          <img
            className="albumImg"
            src={img.url}
            // width="200"
            // height="200"
            alt="albumImg"
          ></img>
        </a>
      </div>
    </Fragment>
  );
};

export default AlbumItem;
