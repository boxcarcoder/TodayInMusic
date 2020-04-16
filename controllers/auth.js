const authRouter = require("express").Router();
const config = require("../utils/config");
const request = require("request");
const querystring = require("querystring");
const path = require("path");

// Spotify client configurations
const client_id = config.CLIENT_ID;
const client_secret = config.CLIENT_SECRET;
const redirect_uri = config.REDIRECT_URI;
const stateKey = "spotify_auth_state";

// Generates a random string containing numbers and letters
const generateRandomString = (length) => {
  var text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

// Get auth options
const getAuthOptions = function (code, redirect_uri, client_id, client_secret) {
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    json: true,
  };

  return authOptions;
};

// @route   GET /
// @desc    Prompt User to Login into Spotify
authRouter.get("/", async (req, res) => {
  try {
    console.log("get / succesfful.");
    var state = generateRandomString(16);
    res.cookie(stateKey, state);

    // user-read-private: Read access to user's subscription details. Required for Search endpoints.
    // user-read-email: Get user's email
    var scope = "user-read-private user-read-email";

    // 1. Get the user's authorization to access data.
    res.redirect(
      "https://accounts.spotify.com/authorize?" +
        querystring.stringify({
          response_type: "code",
          client_id: client_id,
          scope: scope,
          redirect_uri: redirect_uri,
          state: state,
        })
    );
  } catch {
    console.log("get / error.");
  }
});

// @route   GET /callback
// @desc    Spotify callback to request access and refresh tokens.
//          This is called after a user authorizes since it is designated as the Redirect URI.
authRouter.get("/callback", async (req, res) => {
  try {
    console.log("get /callback successful.");
    var code = req.query.code || null; // The authorization code returned by the first call.
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;

    // Check the state parameter
    if (state === null || state !== storedState) {
      res.redirect(
        "/#" +
          querystring.stringify({
            error: "state_mismatch",
          })
      );
    } else {
      res.clearCookie(stateKey);
      const authOptions = getAuthOptions(
        code,
        redirect_uri,
        client_id,
        client_secret
      );
      // 2. Request an access token and refresh token
      request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          // Authorize successful. Access and Refresh Tokens granted.
          var access_token = body.access_token,
            refresh_token = body.refresh_token;

          // Send the access token to the frontend so the frontend can use them in requests to the Spotify API.
          res.redirect(
            "http://localhost:3000/#" +
              querystring.stringify({
                access_token: access_token,
                refresh_token: refresh_token,
              })
          );

          // Send the tokens to the client so the client can use them in requests to the Spotify API.
          // res.redirect(
          //   "/todayInMusic?" +
          //     querystring.stringify({
          //       access_token: access_token,
          //       refresh_token: refresh_token,
          //     })
          // );
        } else {
          res.redirect(
            "/#" +
              querystring.stringify({
                error: "invalid_token",
              })
          );
        }
      });
    }
  } catch {
    console.log("/callback error.");
  }
});

// // @route   GET /todayInMusic
// // @desc    Where the access and refresh token will be sent to.
// authRouter.get("/todayInMusic", async (req, res) => {
//   try {
//     // *** Try loading a component from the front end instead?
//     res.sendFile(path.join(__dirname + "/../views/todayInMusic.html"));
//   } catch {
//     console.log(" error in get /todayInMusic");
//   }
// });

// @route   GET /refreshToken
// @desc    Spotify callback to refresh an access token
authRouter.get("/refreshToken", async (req, res) => {
  try {
    console.log("get /refreshtoken successful");
    // requesting access token from refresh token
    var refresh_token = req.query.refresh_token;
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization:
          "Basic " +
          new Buffer(client_id + ":" + client_secret).toString("base64"),
      },
      form: {
        grant_type: "refresh_token",
        refresh_token: refresh_token,
      },
      json: true,
    };

    request.post(authOptions, function (error, res, body) {
      if (!error && res.statusCode === 200) {
        var access_token = body.access_token;
        res.send({
          access_token: access_token,
        });
      }
    });
  } catch {
    console.log("get /refreshtoken error.");
  }
});

module.exports = authRouter;
