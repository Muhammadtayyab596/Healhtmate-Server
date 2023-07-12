require("dotenv").config();
const connectDB = require("./db/connect");
const Disease = require("./models/disease");
const diseasejson = require("./disease.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Disease.create(diseasejson);
    console.log("dATA ADDED");
  } catch (error) {
    console.log(error);
  }
};

start();
