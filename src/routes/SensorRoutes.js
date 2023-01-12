const express = require("express");
const {
  getAllData,
  createData,
  getSensorById,
  updateData,
  deleteData,
} = require("../controllers/SensorController");

const router = express.Router();

router.route("/").get(getAllData).post(createData);
router.route("/:id").get(getSensorById).put(updateData).delete(deleteData);

module.exports = router;
