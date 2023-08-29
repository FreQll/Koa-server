const mongoose = require("mongoose");
const connection = require("../db");

const schema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  middle_name: {
    type: String,
  },
  age: {
    type: Number,
  },
  role: {
    type: String,
  },
  industry: {
    type: String,
  },
});

module.exports = connection.model("User", schema);
