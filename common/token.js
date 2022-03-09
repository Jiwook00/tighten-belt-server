const jwt = require("jsonwebtoken");
const jwtOptions = { expiresIn: "1y" };
const secretKey = process.env.SECRET_KEY;
const cryptoKey = process.env.CRYPTO_KEY;
const crypto = require("crypto");

module.exports = {
  sign: async (id) => {
    return await jwt.sign({ id }, secretKey, jwtOptions);
  },

  verify: (token) => {
    let result;
    jwt.verify(token, secretKey, async (err, decoded) => {
      if (err) {
        console.log("err : ", err);
        result = false;
      } else {
        result = decoded.id;
      }
    });
    return result;
  },
};
