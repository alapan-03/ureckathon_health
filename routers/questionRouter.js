const express= require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const qController = require("../controllers/questionController");
const bodyParser = require("body-parser");

router.route("/:comId/postQuestion").post(bodyParser.json(), authController.protect, qController.postQuestion);
router.route("/:comId/getQuestion").get(bodyParser.json(), authController.protect, qController.getQuestion);
router.route("/:qId/getQuestionById").get(bodyParser.json(), authController.protect, qController.getQuestionById);
// router.route("/login").post(bodyParser.json(), authController.login);
// router.route("/getUsers").get(bodyParser.json(), authController.protect, authController.getUsers);

module.exports = router;