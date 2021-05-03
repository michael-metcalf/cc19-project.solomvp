const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.json());

var corsOptions = {
  origin: "http://localhost.8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-typ - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  console.log("Welcome to GamaGacha!");
  res.send("Welcome to GamaGacha!");
});

// set port and listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});