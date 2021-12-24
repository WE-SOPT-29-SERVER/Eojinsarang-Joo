const express = require("express");
const router = express.Router();
const { checkUser } = require("../../../middlewares/auth");
const uploadImage = require("../../../middlewares/uploadImage");

router.post("/list", require("./postListGET"));
router.put("/:id", require("./postPUT"));
router.delete("/:id", require("./postDELETE"));
router.post("/", uploadImage, require("./postPOST"));
router.get("/:id", checkUser, require("./postGET"));

module.exports = router;
