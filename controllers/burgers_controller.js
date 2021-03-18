const express = require("express");

const router = express.Router();

//Import the model (burger.js) to use the db functions
const burger = require("../models/burger.js");

//Routes

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

router.post("/api/burger", (req, res) => {
    burger.insertOne("burger_name", req.body.burger_name, 
    function (result) {
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