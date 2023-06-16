require("dotenv").config();
const connectDB = require("./db/connect")
const Medicine = require("./models/medicine")
const Medicinejson = require('./medicine.json')


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Medicine.create(Medicinejson)
        console.log('dATA ADDED')
    }
    catch (error) {
        console.log(error)
    }
}

start();
