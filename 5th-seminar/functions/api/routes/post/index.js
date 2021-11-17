const express = require('express');
const router = express.Router();

router.post("/list", require("./postListGET"));
router.get("/:id", require("./postGET"));
router.put("/:id", require("./postPUT"));
router.delete("/:id", require("./postDELETE"));
router.post("/", require("./postPOST"));

module.exports = router;