const mongoose =  require("mongoose");

const GuestSchema = new mongoose.Schema({
	name: String,
	species: String,
	age: Number,
	// checkInDate: Date,
	// checkOutDate: Date,
	checkedIn: Boolean
})

module.exports = mongoose.model("Guest", GuestSchema)