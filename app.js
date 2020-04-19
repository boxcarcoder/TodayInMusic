const express = require("express");
const cors = require("cors");
var cookieParser = require("cookie-parser");

const authRouter = require("./controllers/auth");
const albumsRouter = require("./controllers/albums");

// initialize app with Express to create client to communicate with Spotify
const app = express();

app.use(cors());
app.use(cookieParser());
app.use("/", authRouter);
app.use("/api/albums", albumsRouter);

module.exports = app;
