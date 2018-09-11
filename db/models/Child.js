const mongoose = require("../connection");
const Schema = mongoose.Schema;

const Child = new mongoose.Schema(
  {
    name: String,
    age: Number,
    height: Number,
    weight: Number,
    diagnosis: Array,
    vaccinations: Array,
  },
  { collection: "child" }
);

module.exports = mongoose.model("Child", Child);