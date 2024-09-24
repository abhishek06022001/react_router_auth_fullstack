const Users = require("../model/userModal");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const userController = {
  // register
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email: email });
      if (!user) {
        return res.status(400).json({ msg: "Wrong Email id" });
      }
      bcrypt.compare(password, user.password, (error, result) => {
        if (error) {
          return res.status(400).json({ msg: error.message });
        }
        if (result) {
          const ac_token = accessToken({ id: user._id });
          const rf_token = refreshToken({ id: user._id });
          res.cookie("refreshToken", rf_token, {
            path: "/api/accessToken",
            httpOnly: true,
          });
         
          
          return res.status(200).json({ msg: ac_token });
        } else {
          return res.status(400).json({ msg: "Wromg password dude" });
        }
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  register: async (req, res) => {
    try {
      const { name, email, role, password } = req.body;
      const user = await Users.findOne({ email: email });
      if (user) {
        return res.status(400).json({ msg: "User already Exists" });
      }
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const newUser = new Users({
        name,
        email,
        password: hashedPassword,
        role,
      });
      await newUser.save();
      return res.status(200).json({ msg: "New User Created " });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshToken", { path: "/api/accessToken" });
      return res.status(200).json({ msg: "Logged Out " });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  //   authenticated routing
  user_info: async (req, res) => {
    let user = await Users.findOne({ _id: req.id }).select("-password");

    return res.status(200).json(user);
  },
  authorized_info: async (req, res) => {
    try {
      const { id } = req.id;
      return res.status(200).json({ msg: "SuccessFull" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
const accessToken = (payload) => {
  try {
    const accessToken = jwt.sign(payload, "accessToken", { expiresIn: "1h" });
    return accessToken;
  } catch (error) {
    throw new Error(error);
  }
};
const refreshToken = (payload) => {
  try {
    const refreshToken = jwt.sign(payload, "refreshToken", {
      expiresIn: "10h",
    });
    return refreshToken;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = userController;
