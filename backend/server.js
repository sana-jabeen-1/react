const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Routes = require("./src/routes");
const config = require("./src/config");
const app = express();
const PORT = 3001;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

// http://localhost:3001/api
app.use("/api", Routes);

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  console.info("Connected to MongoDB");
  app.listen(PORT, () => {
    console.info(`Listening to port ${PORT}`);
  });
});
