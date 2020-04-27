const albumsRouter = require("express").Router();
const axios = require("axios");

// const fetchSongsFromSpotify = async (options) => {
//   try {
//     const date = new Date();
//     console.log(date.toISOString().slice(5, 7)); //get month and date only.

//     var res = await axios.get(
//       "https://api.spotify.com/v1/search?type=track&q=year:1900-2020&limit=50",
//       options
//     );

//     let limit = res.data.tracks.limit;

//     // Spotify api allows the max offset to be 2000.
//     for (let i = 0; i < 2000; i = i + limit) {
//       res = await axios.get(
//         "https://api.spotify.com/v1/search?type=track&q=year:1900-2020&limit=50&offset=" +
//           i,
//         options
//       );
//       for (let j = 0; j < res.data.tracks.items.length; j++) {
//         // each item is the track object.
//         if (
//           res.data.tracks.items[j].album.release_date.slice(5, 10) ===
//           date.toISOString().slice(5, 10)
//         ) {
//           // track names and links
//           console.log(res.data.tracks.items[j].name + ": ");
//           console.log(res.data.tracks.items[j].href);
//         }

//         /*
//         Need to store all track objects.
//         Parse track objects for res.data.tracks.items[j].album.release_date.
//         If the release_date for a track object matches today's date, return those track objects.
//         */
//       }
//     }

//     console.log("done scraping.");
//   } catch (err) {
//     console.log("error fetching all songs");
//     console.error(err);
//   }
// };

const fetchAlbumsFromSpotify = async (options) => {
  try {
    let allAlbums = [];
    const date = new Date();
    console.log(date.toISOString().slice(5, 7)); //get month and date only.

    console.log("sending request to spotify.");
    var albumsFromSpotify = await axios.get(
      "https://api.spotify.com/v1/search?type=album&q=year:1900-2020&limit=50",
      options
    );

    let limit = albumsFromSpotify.data.albums.limit;

    // Spotify api allows the max offset to be 2000.
    // Each call returns 50 albums. 50 * 40 calls = 2000 albums.
    for (let i = 0; i < 2000; i = i + limit) {
      // Get 50 albums per call.
      albumsFromSpotify = await axios.get(
        "https://api.spotify.com/v1/search?type=album&q=year:1900-2020&limit=50&offset=" +
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
          // console.log(
          //   albumsFromSpotify.data.albums.items[j].artists[0].name +
          //     ": " +
          //     albumsFromSpotify.data.albums.items[j].name
          // );
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

    let allAlbums = await fetchAlbumsFromSpotify(options);

    res.json(allAlbums);
  } catch (err) {
    console.log("back end error fetching.");

    console.error(err);
  }
});

module.exports = albumsRouter;
