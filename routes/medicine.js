const express = require("express");
const router = express.Router();

const {
  getAllMedincine,
  getAllMedincineTesting,
} = require("../controllers/medicine");

router.route("/").get(getAllMedincine);
router.route("/:id").get(getAllMedincineTesting);

// router.get("/", getAllMedincine)

module.exports = router;
