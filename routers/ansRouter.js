const express= require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const ansController = require("../controllers/answerController");
const bodyParser = require("body-parser");

router.route("/:qId/:docId?/postAnswer").post(bodyParser.json(), authController.protect, ansController.postAns);
router.route("/:qId/getAnswer").get(bodyParser.json(), authController.protect, ansController.getAns);
// router.route("/getQuestion").get(bodyParser.json(), authController.protect, qController.getQuestion);
// router.route("/login").post(bodyParser.json(), authController.login);
// router.route("/getUsers").get(bodyParser.json(), authController.protect, authController.getUsers);

module.exports = router;