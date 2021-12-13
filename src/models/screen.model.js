const mongoose = require('mongoose');

const screenSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        theater_id: [{
            type: mongoose.Schema.Types.ObjectId,
            ref:"movie",
            required: true
        }],
    },
    {
        versionKey: false,
        timeStamps: true
    }
);

module.exports = mongoose.model("screen", screenSchema )