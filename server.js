const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
require("./db/db");

app.listen(3000, () => {
	console.log("Red Woof Inn Is Open For Business");
})

const hotelController = require("./controllers/hotelController");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(bodyPaser.urlencoded({extended: false}));
app.use(methodOverride)("_method/");
app.use(express.static("public"));
app.use("/guests", hotelController);