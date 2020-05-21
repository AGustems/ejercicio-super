const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    const data = [

    ]
    res.send("Hi")
    console.log("Tomas best teacher")
})

module.exports = router;