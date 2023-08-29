const mongoose = require("mongoose");

const URL =
  "mongodb+srv://shchepinman:H0qbGaDbzxEDF5uF@cluster0.kfbkilk.mongodb.net/blog?retryWrites=true&w=majority";

module.exports = mongoose.createConnection(URL);
