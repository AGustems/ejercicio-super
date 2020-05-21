const express = require("express");
const hbs = require("hbs");
const path = require("path");
const cors = require("cors");
const {urlencoded, json} = express;

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(urlencoded({extended: true}))
app.use(json())
app.use(cors())

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

hbs.registerPartials(path.join(__dirname, "views/partials"));

app.get("/", (req, res, next)=>{
    res.render("index")
})

app.use("/fruta", frutaRoute);
app.use("/carne", carneRoute);
app.use("/galletas", galletasRoute);
app.use("/pizza", pizzaRoute);
app.use("/chocolate", chocolateRoute);
app.use("/verdura", verduraRoute);

app.listen(3000, () => {
    console.log("Server running")
})