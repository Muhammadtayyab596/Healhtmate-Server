const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
    Category: {
        type: String
    },
    ShortName: {
        type: String
    },
    Name: {
        type: String
    },
    Brand: {
        type: String
    },
    Formula: {
        type: String
    },
    Packsize: {
        type: String
    },
    Price: {
        type: String
    },
    PricePerTab: {
        type: String
    },
    Uses: {
        type: String
    },
    SideEffects: {
        type: String
    },
    userId: {
        type: String
    },
})

module.exports = mongoose.model('Medicine', medicineSchema);