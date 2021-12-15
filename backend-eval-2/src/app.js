const express = require("express");

const usersController = require("./controllers/user.controller");
const movieController = require("./controllers/movie.controller");
const theaterController = require("./controllers/theater.controller");
const screenController = require("./controllers/screen.controller");
const showController = require("./controllers/show.controller");
const seatController = require("./controllers/seat.controller");

const app = express();
app.use(express.json());

app.use("/user", usersController)
app.use("/movie", movieController)
app.use("/theater", theaterController)
app.use("/screen", screenController)
app.use("/show", showController)
app.use("/seat", seatController)


module.exports = app;