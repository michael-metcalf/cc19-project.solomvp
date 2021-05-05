const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// app.use(express.json());

const db = require("./src/models");
const Role = db.role;

// db.sequelize.sync({force: true}).then(() => {
//   console.log("Drop and resync db");
//   initial();
// });

var corsOptions = {
  origin: "http://localhost.8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-typ - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use("*", express.static("dist"));

// simple route
app.get("/api", (req, res) => {
  console.log("Welcome to GamaGacha API!");
  res.send("Welcome to GamaGacha API!");
});

// routes
require("./src/routes/auth.routes")(app);
require("./src/routes/user.routes")(app);

// set port and listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("🍕Listening on port", PORT);
});

// function initial() {
//   Role.create({
//     id: 1,
//     name: "user"
//   });

//   Role.create({
//     id: 2,
//     name: "moderator"
//   });
  
//   Role.create({
//     id: 3,
//     name: "admin"
//   });
// }

