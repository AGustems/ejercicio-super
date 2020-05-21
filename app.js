const express = require("express");
const hbs = require("hbs");
const path = require("path");
const cors = require("cors");
const frutasRoute = require("./routes/frutasRoute");
//const carneRoute = require("./routes/carneRoute");
//const galletasRoute = require("./routes/galletasRoute");
//const pizzaRoute = require("./routes/pizzaRoute");
//const chocolateRoute = require("./routes/chocolateRoute");
//const verduraRoute = require("./routes/verduraRoute");

const {
    urlencoded,
    json
} = express;

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(urlencoded({
    extended: true
}))
app.use(json())
app.use(cors())

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

hbs.registerPartials(path.join(__dirname, "views/partials"));

app.get("/", (req, res, next) => {
    res.render("index")
})

app.use("/frutas", frutasRoute);
//app.use("/carne", carneRoute);
//app.use("/galletas", galletasRoute);
//app.use("/pizza", pizzaRoute);
//app.use("/chocolate", chocolateRoute);
//app.use("/verdura", verduraRoute);

app.listen(3000, () => {
    console.log("Server running")
})