const mongoose = require("../connection");
const Schema = mongoose.Schema;

const User = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    male: Boolean,
    children: String
  },
  { collection: "user" }
);

module.exports = mongoose.model("User", User);