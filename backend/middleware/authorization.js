const jwt = require("jsonwebtoken");
const users = require("../model/userModal");
const authorization = async (req, res, next) => {
  try {
    const id = req.id;
    let user = await users.findOne({ _id: id });
    if (user.role == 0) {
      return res.status(400).json({ msg: "User isnt authorised" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
module.exports = authorization;
