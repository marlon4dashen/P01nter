const adminController = require('../controller/adminController')
const express = require('express');

const router = express.Router();


router.get('/posts', adminController.getPosts)


router.get('/post/:postID', adminController.getPost)


router.post('/post', adminController.addPost)

module.exports = router