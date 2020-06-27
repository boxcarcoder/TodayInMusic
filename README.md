# TodayInMusic
Discover music that was released on this day of any decade.

After granting permission for this application to use your Spotify, select a decade you wish to discover music in. 
The application will return all albums released on this day for all years within the selected decade.

Each album will link to its corresponding Spotify page so you can discover new music with ease.

## Overview
This application was built using ReactJS, React Redux, Node.js, and Express.

The backend API is implemented using Node.js and Express, creating a server to execute API calls to Spotify's API. 
The backend API routes will then store the responses from the Spotify API and send them to a React Redux store.

The frontend is built with React, as well as React Redux for state management. 
Actions and reducers are used to invoke the backend API, as well as to store the responses from the Spotify API into React Redux states for the React components to use.
The components are populated with music metadata from the Spotify API, and stylized using SCSS to create a clean, intuitive layout.

This application is written following ES6+ conventions, including arrow functions, React Hooks, and async/await for asynchronous operations.

## Demo
This application is deployed to Heroku:
https://frozen-coast-24275.herokuapp.com/
