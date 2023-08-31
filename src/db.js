const mongoose = require("mongoose");
require("dotenv").config();

module.exports = mongoose.createConnection(process.env.CONNECTION_URL);
