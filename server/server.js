const express = require("express");

const app = express();
const port = 8082;

app.use(express.json());

app.listen(port, () => {
  console.log("Listening on port ", port);
});