// Import express utilities
const { Router, response } = require("express");
const router = Router();
// Import database connection
const { cnn_mysql } = require("../config/db");

// Import headers controller
const apiSecurity = require("../helpers/apiSecurity");

// Set the endpoint for the players
router.get("/players", apiSecurity, async (req, res) => {
  // Create the query to search
  const search = req.query.search + "%";
  let order = "";
  // Check if the order exist and if not exist set a default value
  req.query.order ? (order = req.query.order.toLowerCase()) : (order = "asc");
  const page = req.query.page;
  try {
    // Dependieng of the order executes a query
    if (order === "asc") {
      const query = cnn_mysql.query(
        `SELECT DISTINCT * FROM players WHERE first_name LIKE ? OR commonName LIKE ? ORDER BY first_name ASC`,
        [search, search],
        (err, results) => {
          // Return a JSON with the data to the user
          res.json({
            Page: page,
            totalPages: 1,
            items: results.length,
            Players: results,
          });
        }
      );
    } else if (order === "desc") {
      const query = cnn_mysql.query(
        `SELECT DISTINCT * FROM players WHERE first_name LIKE ? OR commonName LIKE ? ORDER BY first_name DESC`,
        [search, search],
        (err, results) => {
          // Return a JSON with the data to the user
          res.json({
            Page: page,
            totalPages: 1,
            items: results.length,
            Players: results,
          });
        }
      );
    }
  } catch (e) {
    console.log(e);
    // If an error exists return an error code and a message
    res
      .status(500)
      .json({ errorCode: e.errno, message: "Error in the server" });
  }
});
module.exports = router;
