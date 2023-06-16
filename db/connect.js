const mongoose = require("mongoose");
const { options } = require("../routes/medicine");


const connectDB = (uri) => {
    return mongoose.connect(uri, {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then((res)=>{
        console.log("Db Connected")
    })
}

module.exports = connectDB;