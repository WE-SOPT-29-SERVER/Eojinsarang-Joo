const express = require('express');
const router = express.Router();

router.post("/signup", require("./userSignupPOST"));
// router.get('/list', require('./userListGET'));

// router.get('/:userId', require('./userGET'));
// router.put('/:userId', require('./userPUT'));
// router.delete('/:userId', require('./userDELETE'));


module.exports = router;