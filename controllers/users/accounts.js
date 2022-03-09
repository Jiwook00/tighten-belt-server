const { users } = require("../../models");
const { sign } = require("../../common/token");

module.exports = {
  singin: async (req, res) => {
    try {
      const { nickname, password } = req.body;

      const user = await users.findOne({
        raw: true,
        where: { nickname, password },
      });

      if (user) {
        const token = await sign(user.password);
        return res
          .status(200)
          .json({ id: user.id, nickname: user.nickname, token });
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log("e", e);
    }
  },
};
