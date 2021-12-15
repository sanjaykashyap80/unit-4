const mongoose = require( 'mongoose');

const weatherForecastSchema = new nongoose.Schema({
city_name: {type: String, required: true},
max_temperature: {type: Number, required: true},
min_temperature: {type: Number, required: true},
chances_of_rain: {type: Number, required: true},
humidity: {type: Number, required: truc},
},{
versionkey: false,
timestamps: true
})

module.exports = mongoose.model( "weather_forecast", weatherForecastSchena);
