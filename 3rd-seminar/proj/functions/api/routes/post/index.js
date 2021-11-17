const express = require('express');
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");
const posts = require('../../../dbMockup/post');
const util = require('../../../lib/util');
const router = express.Router();

router.get('/', async(req, res)=>{
    if(posts.length < 1){
        res.status(statusCode.OK).send(
            util.success(statusCode.NO_CONTENT, responseMessage.NO_POST, posts
            ));
    }

    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.READ_ALL_POSTS_SUCCESS, posts
        ));
});

router.get('/:id', async(req, res)=>{
    const {id} = req.params;
    if (!id) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
        );
    }

    const post = posts.filter(post => post.id === Number(id))[0];
    if (!post) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NO_POST)
        );
    }

    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.READ_ONE_POST_SUCCESS, post));
});

router.post('/', async(req, res)=>{
    const {title, content} = req.body;
    if (!title || !content) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
        );
    }

    const newPost = {
        id: posts.length + 1,
        title,
        content,
    };
    posts.push(newPost);

    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.ADD_ONE_POST_SUCCESS, newPost
        ));

});

router.put('/:id', async(req, res)=>{
    const {id} = req.params;
    const {title, content} = req.body;

    if (!id) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
        );
    }

    const existingPost = posts.filter(post => post.id === Number(id))[0];
    if (!existingPost) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NO_POST)
        );
    }

    const updatedPost = {...existingPost, title, content};

    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.UPDATE_ONE_POST_SUCCESS, updatedPost
        ));
});

router.delete('/:id', async(req, res)=>{
    const {id} = req.params;
    if (!id) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
        );
    }

    const existingPost = posts.filter(post => post.id === Number(id))[0];
    if (!existingPost) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NO_POST)
        );
    }
    
    const newPost = posts.filter(post => post.id !== Number(id));
    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.DELETE_ONE_POST_SUCCESS, newPost
    ));
});

module.exports=router;