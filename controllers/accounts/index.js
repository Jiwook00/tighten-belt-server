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

      return res.status(201).json({
        percent,
        current: newCurrent
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
      });
    } catch (e) {
      console.log("err : ", e);
      res.sendStatus(500);
    }
  },

  findAllMine: async (req, res) => {
    try {
      const { id } = req.user;
      const data = await accounts.findAll({
        raw: true,
        where: { user_id: id },
      });

      return res.status(200).json(data);
    } catch (e) {
      console.log("err : ", e);
      res.sendStatus(500);
    }
  },

  findAllUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const data = await accounts.findAll({
        raw: true,
        where: { user_id: userId },
      });

      return res.status(200).json(data);
    } catch (e) {
      console.log("err : ", e);
      res.sendStatus(500);
    }
  },

  rank: async (req, res) => {
    try {
      const userData = await users.findAll({
        raw: true,
        order: [["current", "DESC"]],
        attributes: ["id", "name", "current", "target"],
      });

      const result = userData.map((user) => {
        console.log("user ", user);
        return Object.assign(user, {
          percent: Math.round((user.current / user.target) * 100),
        });
      });

      return res.status(200).json(result);
    } catch (e) {
      console.log("err : ", e);
      res.sendStatus(500);
    }
  },

  mine: async (req, res) => {
    try {
      const { id, name, current, target } = req.user;
      const percent = Math.round((current / target) * 100);
      return res.status(200).json({
        name,
        current: current
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
        percent,
      });
    } catch (e) {
      console.log("err : ", e);
      res.sendStatus(500);
    }
  },
};
