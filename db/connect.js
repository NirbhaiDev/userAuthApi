const mongoose = require("mongoose");
const dotenv = require('dotenv').config();

const connectToDB = () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("done");
      })
      .catch((err) => console.log(err));
  } catch (err) {
     throw new err
  }
};

module.exports = connectToDB;
