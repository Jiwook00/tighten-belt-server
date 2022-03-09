const express = require("express");
const router = express.Router();
const { accountController } = require("../controllers");
const { checkToken } = require("../common/middlewares");

router.post("/", checkToken, accountController.createExpense);

module.exports = router;
