const router = require("express").Router();
const userController = require("../controller/userController");
const auth = require("../middleware/auth");
const authorization = require("../middleware/authorization");
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/user_info", auth, userController.user_info);
router.get(
  "/authorized_info",
  auth,
  authorization,
  userController.authorized_info
);
module.exports = router;
