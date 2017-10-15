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

router.get("/make_reservation", (req, res) => {
	res.render("make_reservation", {})
})


router.post("/add_reservation", (req, res) => {

	Guest.create({
		name: req.body.name,
		species: req.body.species,
		age: req.body.age,
		checkInDate: req.body.checkInDate,
		checkOutDate: req.body.checkOutDate,
		checkedIn: false
	}, (err, guest) => {

		if(err) {
			res.send("Error adding guest")
		} else {
			res.redirect("/guests")
		}
	})
})

router.get("/:room/change", (req, res) => {
	Guest.findById(req.params.room, (err, guest) => {
		if(req.body.checkedIn === true){
			req.body.checkedIn = "on"
		} else{
			req.body.checkedIn = "off"
		};
		console.log(guest)
		res.render("change", {guestObject: guest});
	});
});

router.put("/:room/change", (req, res) => {
	if(req.body.checkedIn === "on"){
			req.body.checkedIn = true
		} else{
			req.body.checkedIn = false
		};
	Guest.findByIdAndUpdate(req.params.room, {
		name: req.body.name,
		species: req.body.species,
		age: req.body.age,
		checkInDate: req.body.checkInDate,
		checkOutDate: req.body.checkOutDate,
		checkedIn: req.body.checkedIn
	}, (err, guest) => {
		console.log()
	})

	res.redirect("/reservation")
})

router.get("/:room/reservation", (req, res) => {

	Guest.findById(req.params.room, (err, guest) => {
		res.render("reservation", {guestObject: guest});
	});
})

module.exports = router;