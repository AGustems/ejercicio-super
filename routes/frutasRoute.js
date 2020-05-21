const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    const data = [{
            picture: "https://www.redagricola.com/cl/assets/uploads/2017/08/manazana-792x591-c-default.jpg",
            name: "manzana",
            description: "Roja",
            price: 2
        },
        {
            picture: "https://perfumesyfragancias.online/wp-content/uploads/2018/10/poire.jpg",
            name: "pera",
            description: "Verde",
            price: 2.4
        },
        {
            picture: "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_noticia__small/public/noticias/naranja-invierno.jpg",
            name: "naranja",
            description: "Naranja",
            price: 1
        },
        {
            picture: "https://sc2.elpais.com.uy/files/article_default_content/uploads/2017/09/11/59b612d1476cf.jpeg",
            name: "limón",
            description: "Amarillo",
            price: 3
        }
    ]
    res.render("frutas", data)
})

module.exports = router;