const router = require("express").Router();
const authenticate = require("../../middlewares/authenticate");

const UserController = require("../../controllers/user-management/UserController");

router.get("/get-all-user", authenticate, UserController.view);
router.post("/register", UserController.register);
router.post("/login", UserController.login);

module.exports = router;
