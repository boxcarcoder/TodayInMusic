const albumsRouter = require("express").Router();
const axios = require("axios");

const getAllSongs = async (options) => {
  try {
    var res = await axios.get(
      "https://api.spotify.com/v1/search?type=track&q=year:1900-2020&limit=50",
      options
    );

    let limit = res.data.tracks.limit;

    for (let i = 0; i < res.data.tracks.total; i = i + limit) {
      res = await axios.get(
        "https://api.spotify.com/v1/search?type=track&q=year:1900-2020&limit=50&offset=" +
          i,
        options
      );
      console.log(res.data);
    }
  } catch (err) {
    console.log("error fetching all songs");
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

    getAllSongs(options);
  } catch (err) {
    console.log("back end error fetching.");

    console.error(err);
  }
});

module.exports = albumsRouter;

// //  // Fetch the user's top tracks
// let res = await axios.get(
//   "https://api.spotify.com/v1/me/top/tracks?&limit=50",
//   options
// );

// for (let i = 0; i < res.data.items.length; i++) {
//   //console.log("Album Name: ", res.data.items[i].album.name);
//   //console.log("Song Name: ", res.data.items[i].name);
//   console.log("Song Name: ", res.data.items[i].album.release_date);

//   //  *** This will just be songs from the returned list, which only returns 50 at a time.
//   // I've been wanting to limit the search with a query, but i have been applying my query AFTER the return from the search.
//   if (
//     res.data.items[i].album.release_date === "2016-09-30" ||
//     res.data.items[i].album.release_date === "2015-09-30" ||
//     res.data.items[i].album.release_date === "2014-09-30" ||
//     res.data.items[i].album.release_date === "2013-09-30" ||
//     res.data.items[i].album.release_date === "2012-09-30" ||
//     res.data.items[i].album.release_date === "2011-09-30" ||
//     res.data.items[i].album.release_date === "2010-09-30" ||
//     res.data.items[i].album.release_date === "2009-09-30" ||
//     res.data.items[i].album.release_date === "2008-09-30" ||
//     res.data.items[i].album.release_date === "2007-09-30" ||
//     res.data.items[i].album.release_date === "2006-09-30" ||
//     res.data.items[i].album.release_date === "2005-09-30" ||
//     res.data.items[i].album.release_date === "2004-09-30" ||
//     res.data.items[i].album.release_date === "2003-09-30" ||
//     res.data.items[i].album.release_date === "2002-09-30" ||
//     res.data.items[i].album.release_date === "2001-09-30" ||
//     res.data.items[i].album.release_date === "2000-09-30" ||
//     res.data.items[i].album.release_date === "1999-09-30" ||
//     res.data.items[i].album.release_date === "1998-09-30" ||
//     res.data.items[i].album.release_date === "1997-09-30" ||
//     res.data.items[i].album.release_date === "1996-09-30" ||
//     res.data.items[i].album.release_date === "1995-09-30" ||
//     res.data.items[i].album.release_date === "1994-09-30" ||
//     res.data.items[i].album.release_date === "1993-09-30" ||
//     res.data.items[i].album.release_date === "1992-09-30" ||
//     res.data.items[i].album.release_date === "1991-09-30" ||
//     res.data.items[i].album.release_date === "1990-09-30" ||
//     res.data.items[i].album.release_date === "1989-09-30" ||
//     res.data.items[i].album.release_date === "1988-09-30" ||
//     res.data.items[i].album.release_date === "1987-09-30" ||
//     res.data.items[i].album.release_date === "1986-09-30" ||
//     res.data.items[i].album.release_date === "1985-09-30" ||
//     res.data.items[i].album.release_date === "1984-09-30" ||
//     res.data.items[i].album.release_date === "1983-09-30" ||
//     res.data.items[i].album.release_date === "1982-09-30" ||
//     res.data.items[i].album.release_date === "1981-09-30" ||
//     res.data.items[i].album.release_date === "1980-09-30" ||
//     res.data.items[i].album.release_date === "1979-09-30" ||
//     res.data.items[i].album.release_date === "1978-09-30" ||
//     res.data.items[i].album.release_date === "1977-09-30" ||
//     res.data.items[i].album.release_date === "1976-09-30" ||
//     res.data.items[i].album.release_date === "1975-09-30" ||
//     res.data.items[i].album.release_date === "1974-09-30" ||
//     res.data.items[i].album.release_date === "1973-09-30" ||
//     res.data.items[i].album.release_date === "1972-09-30" ||
//     res.data.items[i].album.release_date === "1971-09-30" ||
//     res.data.items[i].album.release_date === "1970-09-30" ||
//     res.data.items[i].album.release_date === "1969-09-30" ||
//     res.data.items[i].album.release_date === "1968-09-30" ||
//     res.data.items[i].album.release_date === "1967-09-30" ||
//     res.data.items[i].album.release_date === "1966-09-30" ||
//     res.data.items[i].album.release_date === "1965-09-30" ||
//     res.data.items[i].album.release_date === "1964-09-30" ||
//     res.data.items[i].album.release_date === "1963-09-30" ||
//     res.data.items[i].album.release_date === "1962-09-30" ||
//     res.data.items[i].album.release_date === "1961-09-30" ||
//     res.data.items[i].album.release_date === "1960-09-30" ||
//     res.data.items[i].album.release_date === "1959-09-30" ||
//     res.data.items[i].album.release_date === "1958-09-30" ||
//     res.data.items[i].album.release_date === "1957-09-30" ||
//     res.data.items[i].album.release_date === "1956-09-30" ||
//     res.data.items[i].album.release_date === "1955-09-30" ||
//     res.data.items[i].album.release_date === "1954-09-30" ||
//     res.data.items[i].album.release_date === "1953-09-30" ||
//     res.data.items[i].album.release_date === "1952-09-30" ||
//     res.data.items[i].album.release_date === "1951-09-30" ||
//     res.data.items[i].album.release_date === "1950-09-30" ||
//     res.data.items[i].album.release_date === "1949-09-30" ||
//     res.data.items[i].album.release_date === "1948-09-30" ||
//     res.data.items[i].album.release_date === "1947-09-30" ||
//     res.data.items[i].album.release_date === "1946-09-30"
//   ) {
//     console.log(res.data.items[i].name);
//   }
// }
