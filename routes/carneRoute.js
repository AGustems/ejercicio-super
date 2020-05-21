const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    const data = [
    {
        picture: "https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2019/07/25115505/RFB-1707-4-roastbeef.jpg",
        name: "Ternera",
        description: "Carne Kobe de primera calidad",
        precio: "2€"
    },
    {
        picture: "https://www.maangchi.com/wp-content/uploads/2018/02/roasted-chicken-1.jpg",
        name: "Pollo",
        description: "Pollo ecológico",
        precio: "1€"
    }
    ];
    res.render("carne", {data});
})

module.exports = router;