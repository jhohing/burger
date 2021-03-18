const express = require("express");

const router = express.Router();

//Import the model (burger.js) to use the db functions
const burger = require("../models/burger.js");

// Export routes
module.exports = router;