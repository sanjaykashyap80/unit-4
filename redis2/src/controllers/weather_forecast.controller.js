const express = require('express');
// const client = require('../configs/redis');
const redis = require('../configs/redis');

const router = express.Router();

const weatherForecast = require("../models/weather_forecast.model");

router.get("",  (req, res) => {
    redis.get("weather_forecasts", async function(err, forecasts){

        console.log("forecasts", forecasts)

        if(err) console.log(err)

        if(forecasts) return res.status(200).send({cached_forecasts:JSON.parse(forecasts)})

        console.log("reached here");
        
        const weather_forecasts = await WeatherForecast.find (). lean().exec();

        redis.set("weather_forecasts", JSON.stringify(weather_forecasts))

        return res.status(200).send( {db_forecasts: weather_forecasts});

    })
})

module.exports = router;