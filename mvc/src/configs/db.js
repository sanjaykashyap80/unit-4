const mongoose = require("mongoose");

// Step 1
module.exports = () => {
    return mongoose.connect("mongodb://localhost:27017/test");
  };

