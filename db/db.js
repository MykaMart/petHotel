const mongoose = require("mongoose");

const connectionString = "mongodb://localhost/guests";

mongoose.connect(connectionString);

mongoose.connection.on("connected", () => {
	console.log("mongoose connection to " + connectionString);
});

mongoose.connection.on("connected", (error) => {
	console.log("mongoose connection to " + error);
});

mongoose.connection.on("diconnected", () => {
	console.log("mongoose disconnected");
});