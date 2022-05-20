const router = require("express").Router();
const TestController = require("../controllers/TestAnotherQuestion/TestController");
const authenticate = require("../middlewares/authenticate");
const userRoute = require("./user-management/user");

router.get("/", (req, res) => {
  res.status(200).json({
    msg: "Eateroo Master",
    data: {
      status: "Health Check Success",
      date: new Date(),
      uptime: new Date().getTime(),
    },
  });
});

router.use("/users", userRoute);
router.get("/test-two", TestController.noTwo);
router.get("/test-three", TestController.noThree);
module.exports = router;
