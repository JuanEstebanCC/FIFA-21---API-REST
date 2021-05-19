// Import .env
require("dotenv").config();
function apiSecurity(req, res, next) {
  // Storage the header data
  const token = req.headers["x-api-key"];
  // If not exist a header return an error and a message
  if (!token) {
    return res.status(401).json({
      auth: false,
      message: "No token provided",
    });
  }
  // If the header has a not match value with the env secret api code
  if (token !== process.env.API_KEY_SECRET){
  return res.status(401).json({
      auth: false,
      message: "Invalid token",
    });
  }else{
  next();
  }
}

// Export the function
module.exports = apiSecurity;
