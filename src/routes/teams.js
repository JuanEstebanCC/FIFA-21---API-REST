//Import express utilities
const { Router, response } = require("express");
const router = Router();
// Import database connection
const { cnn_mysql } = require("../config/db");

// Import headers controller
const apiSecurity = require("../helpers/apiSecurity");

// Set the endpoint for the teams
router.post("/team", apiSecurity, async (req, res) => {
  // Storage the requested data from the client
  const { name, page } = req.body;

  try {
    // Search in the database with the data requested
    cnn_mysql.query(
      `SELECT DISTINCT * FROM players WHERE UPPER(team) = UPPER(?) AND page = ?`,
      [name, page],
      function (err, results, fields) {
        // Returns the data to the client
        res.json({
          Page: page,
          totalPages: 1,
          items: results.length,
          Players: results,
        });
      }
    );
  } catch (e) {
    console.error(e);
    // If an error exists return an error code and a message
    res
      .status(500)
      .json({ errorCode: e.errno, message: "Error in the server" });
  }
});

module.exports = router;
