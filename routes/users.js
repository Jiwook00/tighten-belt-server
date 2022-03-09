const express = require("express");
const router = express.Router();
const { usersController } = require("../controllers");
const { checkToken } = require("../common/middlewares");

router.get("/token", checkToken, usersController.accounts.token);
router.post("/singin", usersController.accounts.singin);

module.exports = router;
