const mongoose = require('mongoose');

const showSchema = mongoose.Schema(
    {
        show: [{
            type: mongoose.Schema.Types.ObjectId,
            ref:"show",
            required: true
        }],
    },
    {
        versionKey: false,
        timeStamps: true
    }
);

module.exports = mongoose.model("seat", showSchema )