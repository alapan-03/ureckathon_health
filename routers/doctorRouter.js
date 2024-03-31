const express= require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const docController = require("../controllers/doctorController");
const bodyParser = require("body-parser");

router.route("/getDoc").get(bodyParser.json(), authController.protect, docController.getDoc);
router.route("/postDoc").post(bodyParser.json(), authController.protect, docController.postDoc);

module.exports = router;