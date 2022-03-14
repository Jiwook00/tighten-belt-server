const { users } = require("../models");
const { verify } = require("./token");

module.exports = {
  checkToken: async (req, res, next) => {
    try {
      const token = req.header("authorization").split(" ")[1];
      if (token) {
        const userId = await verify(token);
        if (userId) {
          req.user = await users.findOne({ where: { id: userId } });
          next();
          return;
        }
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log("err : ", e);
      res.sendStatus(500);
    }
  },
};
