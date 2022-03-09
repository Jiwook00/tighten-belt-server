const express = require("express");
const router = express.Router();
const { usersController } = require("../controllers");

router.post("/singin", usersController.accounts.singin);

module.exports = router;
