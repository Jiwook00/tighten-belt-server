const express = require("express");
const router = express.Router();
const { accountController } = require("../controllers");
const { checkToken } = require("../common/middlewares");

router.post("/", checkToken, accountController.createExpense);
router.get("/", checkToken, accountController.findAll);

module.exports = router;