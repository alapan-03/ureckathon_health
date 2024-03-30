const express= require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const comController = require("../controllers/communityController");
const bodyParser = require("body-parser");

router.route("/getIn").get(bodyParser.json(), authController.protect, comController.getIntoCommunity);
// router.route("/login").post(bodyParser.json(), authController.login);
// router.route("/getUsers").get(bodyParser.json(), authController.protect, authController.getUsers);

module.exports = router;