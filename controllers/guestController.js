const express = require("express");
const router = express.Router();

const Guest = require("../models/guestModel.js");

router.get("/", (req, res) => {
	Guest.find( (err, guests) => {
		if(err) {
			res.send("Database Error");
		} else {
			res.render("index", {
				guestList: guests
			});
		};
	});
});

module.exports = router;