const config = require("./utils/config");
const express = require("express");
const authRouter = require("./controllers/auth");
const cors = require("cors");
var cookieParser = require("cookie-parser");

// initialize app with Express to create client to communicate with Spotify
const app = express();

app.use(cors());
app.use(cookieParser());
app.use("/", authRouter);

// 1. Request to search for all songs released in a year range: 1900-2020
// 2. Request to retrieve metadata on all the returned albums
// 3. Parse the returned metadata for all returned albums by release_date, and release_date_precision set to "day"

module.exports = app;
