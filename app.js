const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const PORT = process.env.PORT || 800;
// requiring files in this ..........
const connect = require('./db/connect');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');
const dummyRouter = require('./routes/dummy');

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
app.use("/api/dumy", dummyRouter);



app.listen(PORT, () => {
  console.log("listening on http://localhost:800");
});
