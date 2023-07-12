const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  medicineId: { type: String },
  medicineName: { type: String },
  medicineDetail: { type: String },
  uses: { type: String },
  sideEffects: { type: String },
});

// Define the schema for the disease
const diseaseSchema = new mongoose.Schema({
  id: { type: String },
  diseaseName: { type: String },
  diseaseDetails: { type: String },
  symptom: { type: String },
  medicine: [medicineSchema],
});

module.exports = mongoose.model("Disease", diseaseSchema);
