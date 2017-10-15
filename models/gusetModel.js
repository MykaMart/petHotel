const mongoose =  require("mongoose");

const GuestSchema = new mongoose.Schema({
	name: String,
	species: String;
	age: Number,
	checkin: Date,
	checkout: Date,
	grooming: Boolean
})

module.exports = mongoose.model("Guest", GuestSchema)