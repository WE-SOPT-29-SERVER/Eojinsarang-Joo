const express = require("express");
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");
const users = require("../../../dbMockup/user");
const util = require("../../../lib/util");

module.exports = async (req, res) => {
    const {email, password} = req.body;

    const user = users.filter(user => user.email === email)[0];
    if (!user) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER)
        );
    }
   
    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, {
            id: user.id,
    }));
};
