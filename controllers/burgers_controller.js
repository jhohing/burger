var express = require("express");

var router = express.Router();

//Import the model (burger.js) to use the db functions
var burger = require("../models/burger.js");

//Routes

router.get("/", (req, res) => {
    burger.selectAll(data => {
        var hbsobject = {
            burger: data
        };
        console.log(hbsobject);
        res.render("index", hbsobject);
    });
});

router.post("/api/burger", (req, res) => {
    burger.insertOne("burger_name", req.body.burger_name, result => {
        res.json({id: result.insertId})
    });
});

router.put("/api/burger/:id", (req, res) => {
    const burgerId = req.params.id;

    burger.updateOne(burgerId, function(result) {
        if(result.changedRows == 0){
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }        
    });
});

// Export routes
module.exports = router;