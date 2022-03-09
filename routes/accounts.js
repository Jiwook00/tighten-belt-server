const express = require("express");
const router = express.Router();
const { accountController } = require("../controllers");
const { checkToken } = require("../common/middlewares");

router.post("/", checkToken, accountController.createExpense);
router.get("/", checkToken, accountController.findAllMine);
router.get("/mine", checkToken, accountController.mine);
router.get("/rank", checkToken, accountController.rank);
router.get("/:userId", checkToken, accountController.findAllUser);

module.exports = router;
