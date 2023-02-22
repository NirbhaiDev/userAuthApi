const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectToDB = () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://nirbhay1P:nipri7838@cluster0.hao8dq1.mongodb.net/nipriDatabase?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => {
        console.log("done");
      })
      .catch((err) => console.log(err, "------- errrr ------"));
  } catch (err) {
    throw new err();
  }
};

module.exports = connectToDB;
