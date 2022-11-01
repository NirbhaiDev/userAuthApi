const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: "string",
      required: true,
      min: 3,
      max: 50,
      unique: true,
    },
    email: {
      type: "string",
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
      min: 6,
    },
    profilePicture: {
      type: "string",
      default: "",
    },
    coverPicture: {
      type: "string",
      default: "",
    },
    followers: {
      type: "array",
      default: [],
    },
    followings: {
      type: "array",
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: "string",
      max: 200,
    },
    city: {
      type: "string",
      max: 50,
    },
    from: {
      type: "string",
      max: 50,
    },
    relationship:{
      type: Number,
      enum: [1, 2, 3]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
