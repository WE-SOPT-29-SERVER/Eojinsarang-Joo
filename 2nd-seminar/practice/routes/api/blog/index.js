var express = require('express');
var router = express.Router();

router.get('/post', function(req, res, next) {
    const result = {
        status : 200,
        message : "api/blog/post",
    }
    res.status(200).send(result);
});

module.exports = router;
