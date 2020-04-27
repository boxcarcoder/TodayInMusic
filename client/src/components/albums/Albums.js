import React, { Fragment } from "react";
import Spinner from "../layout/Spinner";
import AlbumItem from "./AlbumItem";

// redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Albums = ({ albumsState: { albums, loading } }) => {
  const displayAlbums = () => {
    if (loading) {
      return (
        <Fragment>
          <Spinner />
        </Fragment>
      );
    } else {
      //   for (let i = 0; i < albums.length; i++) {
      //     return (
      //       <AlbumItem
      //         name={albums[i].name}
      //         artist={albums[i].artists[0].name}
      //         // img={albums[i].images[1]}
      //         // url={albums[i].external_urls}
      //       />
      //     );
      //   }
      return albums.map((album) => (
        <AlbumItem name={album.name} artist={album.artists[0].name} />
      ));
    }
  };

  return (
    <Fragment>
      <h1>list of albums</h1>
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
