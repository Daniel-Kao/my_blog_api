const app = require("./app");

require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 3000;

// Database
const db = require("./config/database");

// Test DB
db.authenticate()
	.then(() => console.log("Database connected..."))
	.catch((err) => console.log("Error: " + err));

const server = app.listen(port, () => {
	console.log(`app running on port ${port}`);
});
