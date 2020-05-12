import React, { Fragment } from "react";
import Spinner from "../layout/Spinner";
import AlbumItem from "./AlbumItem";

// redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Albums = ({ albumsState: { albums, loading, finalLoad } }) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(5, 10);

  // As the getAllAlbums action updates the albums redux state, the Albums
  // component re-renders since the albums redux state is a prop to the component.
  const displayAlbums = () => {
    if (loading) {
      //if no albums have been fetched by the Spotify API yet
      return (
        <Fragment>
          <Spinner />
        </Fragment>
      );
    } else {
      if (!finalLoad) {
        // While the application is still fetching from the Spotify API, display what has been fetched already.
        return (
          <Fragment>
            <Spinner />
            {albums.map((album) => (
              <AlbumItem
                key={album.id}
                name={album.name}
                artist={album.artists[0].name}
                img={album.images[1]}
                url={album.external_urls}
              />
            ))}
          </Fragment>
        );
      } else {
        // At the end of all fetching, remove the spinner loader.
        return albums.map((album) => (
          <AlbumItem
            key={album.id}
            name={album.name}
            artist={album.artists[0].name}
            img={album.images[1]}
            url={album.external_urls}
          />
        ));
      }
    }
  };

  return (
    <Fragment>
      <h1>Today In Music: {formattedDate}</h1>
      {displayAlbums()}
    </Fragment>
  );
};

Albums.propTypes = {
  albumsState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  albumsState: state.albums,
});

export default connect(mapStateToProps)(Albums);
