const { accounts, users } = require("../../models");

module.exports = {
  createExpense: async (req, res) => {
    try {
      const { expense } = req.body;
      const { id, current, target } = req.user;
      const newCurrent = current - expense;
      const percent = Math.round((newCurrent / target) * 100);

      await accounts.create({ user_id: id, expense });
      await users.update({ current: newCurrent }, { where: { id } });

      return res.status(201).json({ percent, current: newCurrent });
    } catch (e) {
      console.log("err : ", e);
      res.sendStatus(500);
    }
  },
};
