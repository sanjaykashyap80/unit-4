const express = require('express');

const weatherForecastController = require("./controllers/weather_forecast.controller")

const app = express ();
app.use(express.json());

app.use("/weather_forecasts", weatherForecastController)

module.exports = app;