import React, { Fragment } from "react";

const AlbumItem = ({ name, artist, img, url }) => {
  return (
    <Fragment>
      <section className="albums">
        <div className="albums-inner">
          <p>Artist: {artist}</p>
          <p>Album Name: {name}</p>
          <a href={url.spotify} target="_blank" rel="noopener noreferrer">
            <img src={img.url} width="200" height="200" alt="albumImg"></img>
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default AlbumItem;
