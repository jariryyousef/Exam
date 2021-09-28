"use strict";
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;

const {getFruit,getUser,creatFruit,updateFruit,deleteFruit}=require("./controoler/fruit.controoler")

mongoose.connect(`${mongoUrl}`);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/fruits",getFruit)
app.get("/fruits/:email",getUser)
app.post("/fruits",creatFruit)
app.put("/fruits/:id",updateFruit)
app.delete("/fruits/:id",deleteFruit)


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
