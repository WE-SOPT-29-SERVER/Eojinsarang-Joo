const express = require('express');
const router = express.Router();
const util = require("../lib/util");
const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");
const users = require("./../dbMockUp/user");

router.post("/signup", async (req, res) => {
    // destructuring assignment 비구조화 할당
    //const {email: myemail, name: myname, password: mypassword} = req.body;
    const {email, name, password} = req.body;

    // request body가 잘못됐을 때
    if (!email || !name || !password){
        return res.status(statusCode.BAD_REQUEST)
        .send(util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.NULL_VALUE,
            ));
    }

    // 해당 이메일을 가진 user가 이미 있을 때
    //const alreadyUser = users.filter(obj => obj.email === email)[0];
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
});

router.post("/login", (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(statusCode.BAD_REQUEST)
        .send(util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.NULL_VALUE,
            ));
    }

    const user = users.filter(user => user.email === email)[0];
    if (!user){
        return res.status(statusCode.BAD_REQUEST)
        .send(util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.NO_USER,
            ));
    }

    if(!user.password === password){
        return res.status(statusCode.BAD_REQUEST)
        .send(util.fail(
            statusCode.BAD_REQUEST,
            responseMessage.MISS_MATCH_PW,
            ));
    }

    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, {
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            },
        }),
    );
   
});


router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { newName } = req.body;

    if (!id || !newName) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
            );
    }

    const existingUser = users.filter(user => user.id === Number(id))[0];

    if (!existingUser) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    const updatedUser = { ...existingUser, name: newName };

    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.USER_UPDATE_SUCCESS,
            updatedUser,
        ),
    );
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
            );
    }

    const existingUser = users.filter(user => user.id === Number(id))[0];

    if (!existingUser) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    const newUsers = users.filter(user => user.id !== Number(id));

    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.USER_DELETE_SUCCESS,
            newUsers,
        ),
    );
});

router.get("/profile/:id", async (req, res) => {
    // request params에서 데이터 가져오기
    // 존재하는 아이디인지 확인 - 없다면 No user 반환
    // 성공 - login success와 함께 userId 반환
});

module.exports = router;