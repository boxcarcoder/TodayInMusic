const albumsRouter = require("express").Router();
const axios = require("axios");

// @route   GET /api/albums
albumsRouter.get("/", async (req, res) => {
  try {
    // get the access token sent from the getAllAlbums action.
    let accessToken = req.headers.authorization;

    let options = {
      // prettier-ignore
      headers: { 'Authorization': "Bearer " + accessToken },
      json: true,
    };

    let albums = await axios.get(
      "https://api.spotify.com/v1/search?type=album&q=year:1900-2020",
      options
    );

    console.log("albums from spotify: ", albums);
  } catch (err) {
    console.log("back end error fetching.");

    //console.error(err);
  }
});

module.exports = albumsRouter;
