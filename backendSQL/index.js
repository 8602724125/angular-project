const express = require("express");
const app = express();
const api = require("./routes/api");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./DBConnect/connectionSQL");

require("./global_functions");

db.sequelize.sync();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use("/", api);

app.listen(3000, () => {
  console.log("Server is Running At PORT-3000");
});
