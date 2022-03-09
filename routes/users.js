const express = require("express");
const router = express.Router();
const { usersController } = require("../controllers");
const { checkToken } = require("../common/middlewares");

router.get("/token", checkToken, usersController.token);
router.post("/singin", usersController.singin);

module.exports = router;
