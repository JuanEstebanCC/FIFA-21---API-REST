// Import modules
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
// Modules for security and performance
const compression = require("compression");
const helmet = require("helmet");

// Import the endpoints
const players = require("./routes/players");
const teams = require("./routes/teams");

// Use the imported modules and set to allow json files
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Improve performance
app.use(compression());
// Improve security
app.use(helmet());
app.use(cors());

// Use the endpoints
app.use("/api/v1", players, teams);

// Create the server and set the port 5300 or the port on the .env file
app.set("port", process.env.PORT || 5300);

app.listen(app.get("port"), () => {
  console.log(`Server listen on port ${app.get("port")}`);
});
