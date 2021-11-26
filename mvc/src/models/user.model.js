const mongoose = require("mongoose");

// Users Mongoose
const userSchema = new mongoose.Schema(
    {
      first_name: { type: String, required: true },
      last_name: { type: String, required: false },
      email: { type: String, required: true, unique: true },
      gender: { type: String, required: false, default: "Male" },
      age: { type: Number, required: true },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
//   const User = mongoose.model("user", userSchema); // users

  module.exports = mongoose.model("user",userSchema);