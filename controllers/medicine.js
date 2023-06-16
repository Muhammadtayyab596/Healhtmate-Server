const Medicine = require("../models/medicine")

const getAllMedincine = async (req, res) => {
    const { ShortName } = req.query;

    const filter = {};
    if (ShortName) {
        filter.ShortName = { $regex: ShortName + ".*", $options: "i" };
    }

    Medicine.findOne(filter)
        .then((medicine) => {
            if (!medicine) {
                return res.status(404).json({ error: 'Medicine not found.' });
            }
            const formula = medicine.Formula;
            const sigleFormula = formula.split(" ").splice(0, 1).join("");

            Medicine.find({ Formula: { $regex: sigleFormula + ".*" } }).then((medicines) => {
                res.status(200).json(medicines)
            })
        })
        .catch((er) => {
            res.status(500).json({ error: 'An error occurred while searching for medicines.' });
        })
}




const getAllMedincineTesting = async (req, res) => {
    const medicineId = req.params.id
    Medicine.findOne({ _id: medicineId })
        .then((response) => {

            if (!response) {
                console.log("first")
                return res.status(404).json({ error: 'Data not found' });
            }
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: 'Data not found' });
        });
}

module.exports = { getAllMedincine, getAllMedincineTesting };