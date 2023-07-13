const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  medicineId: { type: String },
  medicineName: { type: String },
  medicineDetail: { type: String },
  uses: { type: String },
  SideEffects: { type: String },
});

// Define the schema for the disease
const diseaseSchema = new mongoose.Schema({
  id: { type: String },
  diseaseName: { type: String },
  diseaseDeatils: { type: String },
  symptom: { type: String },
  medicine: [medicineSchema],
});

module.exports = mongoose.model("DiseaseModelUpadteAgain", diseaseSchema);
