const express = require("express");
// const dotenv=require
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const app = express();

const connect_database = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
      console.log(`MongoDB connected with server ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

app.use(express.json());

// route imports

app.use("/api/v1", productRoute);
module.exports = {
  app,
  connect_database,
};
