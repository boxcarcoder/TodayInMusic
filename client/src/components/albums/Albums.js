import React, { Fragment } from "react";
import Spinner from "../layout/Spinner";
import AlbumItem from "./AlbumItem";
import { Link } from "react-router-dom";
import { clearAllAlbums } from "../../actions/albums";
import getCurrentDate from "../../utils/getCurrentDate";

// redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Albums = ({
  albumsState: { albums, loading, finalLoad, currYear },
  authState: { token },
  clearAllAlbums,
}) => {
  // Get current date
  const monthAndDay = getCurrentDate("MONTH_AND_DAY");

  // As the getAllAlbums action updates the albums redux state, the Albums
  // component re-renders since the albums redux state is a prop to the component.
  const displayAlbums = () => {
    if (loading) {
      // If no albums have been fetched by the Spotify API yet
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
            <div>
              <h3 className="subHeader">Fetching albums from... {currYear}</h3>
              <Spinner />
            </div>

            <div className="albumsLayout">
              {albums.map((album) => (
                <AlbumItem
                  key={album.id}
                  name={album.name}
                  artist={album.artists[0].name}
                  img={album.images[1]}
                  url={album.external_urls}
                  date={album.release_date}
                />
              ))}
            </div>
          </Fragment>
        );
      } else {
        // At the end of all fetching, remove the spinner loader.
        return (
          <Fragment>
            <div className="albumsLayout">
              {albums.map((album) => (
                <AlbumItem
                  key={album.id}
                  name={album.name}
                  artist={album.artists[0].name}
                  img={album.images[1]}
                  url={album.external_urls}
                  date={album.release_date}
                />
              ))}
            </div>
          </Fragment>
        );
      }
    }
  };

  const displayBackBtn = () => {
    if (finalLoad) {
      return (
        <Link
          className="btn btn-primary btn-small"
          onClick={() => clearAllAlbums()}
          to={{
            pathname: `/Landing/?access_token=${token.toString()}`,
          }}
        >
          Go Back
        </Link>
      );
    }
  };

  return (
    <Fragment>
      <header>Today In Music: {monthAndDay}</header>
      {displayAlbums()}
      {displayBackBtn()}
    </Fragment>
  );
};

Albums.propTypes = {
  albumsState: PropTypes.object.isRequired,
  authState: PropTypes.object.isRequired,
  clearAllAlbums: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  albumsState: state.albums,
  authState: state.auth,
});

export default connect(mapStateToProps, { clearAllAlbums })(Albums);
