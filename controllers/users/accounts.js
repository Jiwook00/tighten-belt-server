const { users } = require("../../models");

module.exports = {
  singin: async (req, res) => {
    try {
      const { nickname, password } = req.body;

      const user = await users.findOne({
        raw: true,
        where: { nickname, password },
      });

      if (user) {
        console.log("여기서 토큰 발급");
        return res.send("ok");
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log("e", e);
    }
  },
};
