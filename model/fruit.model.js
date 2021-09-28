"use strict";
const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  title: { type: String },
  price: { type: Number },
  img: { type: String },
  email: { type: String },
});

const Fruit = mongoose.model("fruit", fruitSchema);

module.exports = Fruit;
