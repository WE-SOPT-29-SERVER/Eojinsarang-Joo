var express = require('express');
var router = express.Router();

router.get('/login', function(req, res) {
    const result = {
        status : 200,
        message : "api/users/login"
    }
  res.status(200).send(result);
});

router.get('/signup', function(req, res) {
    const result = {
        status : 200,
        message : "api/users/signup"
    }
  res.status(200).send(result);
});

module.exports = router;
