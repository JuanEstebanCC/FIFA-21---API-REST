// Import modules to fetch
const fetch = require("node-fetch");
// Import database connection
const { cnn_mysql } = require("./config/db");
// Create a variable to storage the data
let players = "";

// Fetch the data from the url
fetch("https://www.easports.com/fifa/ultimate-team/api/fut/item?page=1")
  .then((response) => response.json())
  .then(async (data) => {
    // Storage the data on the variable
    players = data;

    //Map the array of players and storage there in the database
    players.items.map(async (item) => {
      // Storage the page's number
      const page = players.page;

      //Get individual data of the players
      const firstName = item.firstName;
      const lastName = item.lastName;
      const position = item.position;
      const nation = item.nation.name;
      const club = item.club.name;
      let commonName = item.commonName;

      // Check if have a common name
      if (commonName) {
        // If exist storage the player in the database
        await cnn_mysql
          .promise()
          .execute(
            `INSERT INTO players(commonName,first_name,last_name,position,nation,team,page)VALUES(?,?, ?, ?, ?, ?, ?)`,
            [commonName, firstName, lastName, position, nation, club, page]
          );
      } else {
        // If not exist storage that field empty and fill the others
        commonName = "";
        await cnn_mysql
          .promise()
          .execute(
            `INSERT INTO players(commonName,first_name,last_name,position,nation,team,page)VALUES(?,?, ?, ?, ?, ?, ?)`,
            [commonName, firstName, lastName, position, nation, club, page]
          );
      }
    });
    return false;
  })
  .then(
    console.info(
      "Please wait meanwhile the data is fetched, Press Ctrl + C to cancel"
    )
  );

// Exit the process after 5 seconds
setTimeout(() => process.exit(), 5000);
