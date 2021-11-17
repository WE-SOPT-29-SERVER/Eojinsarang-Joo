const express = require("express");
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");
const users = require("../../../dbMockup/user");
const util = require("../../../lib/util");

module.exports = async (req, res) => {
    const {id} = req.params;
    
    if (!id) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
        );
    }

    const user = users.filter(user => user.id === Number(id))[0];
    if (!user) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER)
        );
    }

    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.READ_PROFILE_SUCCESS, user));
};