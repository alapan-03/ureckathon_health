const express= require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const bodyParser = require("body-parser");
const adminController = require("./../controllers/adminController")

router.route("/postDoc").post(bodyParser.json(), adminController.postDoc);
// router.route("/adminLogin").post(bodyParser.json(), adminController.admLogin);
router.route("/postAdmin").post(bodyParser.json(), adminController.postAdmin);
// router.route("/login").post(bodyParser.json(), authController.login);
// router.route("/getUsers").get(bodyParser.json(), authController.protect, authController.getUsers);

module.exports = router;