const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

// ROUTES
app.get("/", (request, response) => {
  response.send("We are on home");
});

// Connect to DB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connection Successful!!"))
  .catch(err => console.error(err));

//How to start listening to the server
app.listen(3000);
