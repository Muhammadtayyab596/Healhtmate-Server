const express = require("express");
const router = express.Router();

const {
  getAllDisease,
  getAllDiseaseMedicine,
} = require("../controllers/disease");

router.route("/").get(getAllDisease);
router.route("/:id").get(getAllDiseaseMedicine);

// router.get("/", getAllMedincine)

module.exports = router;
