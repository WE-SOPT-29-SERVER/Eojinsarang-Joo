const router = express.Router();
const util = require("../lib/util");
const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");
const users = require("./../dbMockUp/user");

module. exports = (req, res) => {
    const {email, name, password} = req.body;
    
    if (!email || !name || !password){
        return res.status(statusCode.BAD_REQUEST)
        .send(util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.NULL_VALUE,
            ));
    }

    const alreadyUser = users.filter(obj => obj.email === email).length > 0;
    if (alreadyUser){
        return res.status(statusCode.BAD_REQUEST)
        .send(util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.ALREADY_EMAIL,
            ));
    }

    const newUser = {
        id: users.length + 1,
        name,
        password, 
        email
    };
    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.CREATED_USER, newUser));
}