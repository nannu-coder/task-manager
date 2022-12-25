const mongoose = require("mongoose");

// mongodb://localhost:27017

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose.connect(url);
};

module.exports = connectDB;
