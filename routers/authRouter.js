const express= require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const bodyParser = require("body-parser");

router.route("/signup").post(bodyParser.json(), authController.signup);
router.route("/login").post(bodyParser.json(), authController.login);

module.exports = router;