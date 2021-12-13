const mongoose = require('mongoose');

const theaterSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
    },
    {
        versionKey: false,
        timeStamps: true
    }
);

module.exports = mongoose.model("theater", theaterSchema )