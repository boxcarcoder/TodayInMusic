const albumsRouter = require("express").Router();
const axios = require("axios");

const fetchAlbumsByYear = async (options, year) => {
  try {
    let allAlbums = [];
    const date = new Date();

    // Spotify api allows max limit to be 50
    let limit = 50;

    // Spotify api allows the max offset to be 2000.
    // Each call returns 50 albums. 50 * 40 calls = 2000 albums.
    for (let i = 0; i < 2000; i = i + limit) {
      albumsFromSpotify = await axios.get(
        "https://api.spotify.com/v1/search?type=album&q=year:" +
          year +
          "&limit=50&offset=" +
          i,
        options
      );

      // Traverse the 50 albums returned by the API call to find a matching release date.
      // Each item is an album object.
      for (let j = 0; j < albumsFromSpotify.data.albums.items.length; j++) {
        if (
          albumsFromSpotify.data.albums.items[j].release_date.slice(5, 10) ===
          date.toISOString().slice(5, 10)
        ) {
          console.log(
            albumsFromSpotify.data.albums.items[j].artists[0].name +
              ": " +
              albumsFromSpotify.data.albums.items[j].name
          );
          //console.log(albumsFromSpotify.data.albums.items[j]);
          allAlbums.push(albumsFromSpotify.data.albums.items[j]);
        }
      }
    }

    console.log("done scraping.");
    return allAlbums;
  } catch (err) {
    console.log("error fetching all albums");
    console.error(err);
  }
};

// @route   GET /api/albums/:year
albumsRouter.get("/:year", async (req, res) => {
  try {
    // get the access token sent from the getAllAlbums action.
    let accessToken = req.headers.authorization;

    let options = {
      // prettier-ignore
      headers: { 'Authorization': "Bearer " + accessToken },
      json: true,
    };

    let allAlbums = await fetchAlbumsByYear(options, req.params.year);

    res.json(allAlbums);
  } catch (err) {
    console.log("back end error fetching.");

    console.error(err);
  }
});

module.exports = albumsRouter;
