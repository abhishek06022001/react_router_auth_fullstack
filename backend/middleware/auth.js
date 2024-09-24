const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).json({ msg: "No Token Provided" });
    }
     jwt.verify(token, "accessToken", (err, decoded) => {
      if (err) {
        console.log(err.message);
      } else {
        let id = decoded.id;
        req.id = id;
        next();
      }
    });
    // return res.status(200).json(token);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
module.exports = auth;
