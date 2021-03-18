const express = require("express");

const router = express.Router();

//Import the model (burger.js) to use the db functions
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    console.log("BURGER");
    burger.selectAll(data => {
        var hbsobject = {
            burger: data
        };
        console.log(hbsobject);
        res.render("index", hbsobject);
    });
});

// Export routes
module.exports = router;