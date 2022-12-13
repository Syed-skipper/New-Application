const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

global.SampleModule = require('./Modules/sampleModule');

const router = require('./Router/sampleRouter')
//console.log("DB MODEL SERVER ",__db_model)

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.use("/sample", router);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});