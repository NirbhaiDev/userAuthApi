const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
// requiring files in this ..........
const connect = require('./db/connect');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');

const app = express();

// connecting with the database ...
connect();

// middlewares ................
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// using routers ...
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);



app.listen(800, () => {
  console.log("listening on http://localhost:800");
});
