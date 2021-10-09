const express =require("express");
var router = express.Router();

router.get('/', (req, res) => {
    const result = {
        status: 200,
        message: "Api~",
    };
  res.status(200).send(result);
});

router.use("/api", require("./api"));

module.exports = router;
