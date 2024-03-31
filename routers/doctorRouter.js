const express= require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const docController = require("../controllers/doctorController");
const bodyParser = require("body-parser");

router.route("/getDoc").get(bodyParser.json(), authController.protect, docController.getDoc);

module.exports = router;