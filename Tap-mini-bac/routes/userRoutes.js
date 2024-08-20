const express = require("express");
const { getUser, tap, startGame } = require("../controllers/userController");

const router = express.Router();

router.get("/user/:telegramId", getUser);
router.post("/tap", tap);
router.post("/start", startGame);

module.exports = router;
