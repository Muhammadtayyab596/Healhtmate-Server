const Disease = require("../models/disease");

const getAllDisease = async (req, res) => {
  try {
    const diseases = await Disease.find();
    res.json(diseases);
  } catch (error) {
    console.error("Error fetching diseases:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllDiseaseMedicine = async (req, res) => {
  const diseaseId = req.params.id;
  console.log(diseaseId);
  Disease.findOne({ id: diseaseId })
    .then((response) => {
      if (!response) {
        return res.status(404).json({ error: "Data not found" });
      }
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({ error: "Data not found" });
    });
};

module.exports = { getAllDisease, getAllDiseaseMedicine };
