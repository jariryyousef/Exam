"use strict";
const Fruit = require("../model/fruit.model");
const axios = require("axios");

const getFruit = (req, res) => {
  axios.get(`https://fruit-api-301.herokuapp.com/getFruit`).then((value) => {
    res.json(value.data.fruits);
  });
};

const getUser = (req, res) => {
  const email = req.params.email;
  Fruit.find({ email: email }, (err, foundFruit) => {
    res.json(foundFruit);
  });
};

const creatFruit = (req, res) => {
  const { title, price, img, email } = req.body;
  const newFruit = new Fruit({
    title,
    price,
    img,
    email,
  });
  newFruit.save();
  res.json(newFruit);
};

const updateFruit = (req, res) => {
  const id = req.params.id;
  const { title, price, img, email } = req.body;

  Fruit.findByIdAndUpdate(
    { _id: id },
    { title, price, img, email },
    { new: true },
    (err, updateFruit) => {
      console.log("updaaaaaated");
      res.json(updateFruit);
    }
  );
};

const deleteFruit = (req, res) => {
  const id = req.params.id;
  Fruit.deleteOne({ _id: id }, (err, deleteFruit) => {
    console.log("deleteeeeeeeeeeed");
    res.json(deleteFruit);
  });
};

// const getUser=(req,res)=>{}

module.exports = { getFruit, getUser, creatFruit, updateFruit, deleteFruit };
