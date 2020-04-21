const albumsRouter = require("express").Router();
const axios = require("axios");

// @route   GET /api/albums
albumsRouter.get("/", async (req, res) => {
  try {
    // let access_token = req.params.access_token;

    // console.log("REQ: ", req);
    // console.log("REQ.PARAMS: ", req.params);
    // console.log("ACCESS TOKEN: ", access_token);

    let access_token = req.query.access_token;

    console.log("REQ: ", req);
    console.log("REQ.QUERY: ", req.query);
    console.log("ACCESS TOKEN: ", access_token);

    let options = {
      // prettier-ignore
      headers: { 'Authorization': "Bearer " + access_token },
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
