const express = require('express');
const Post = require('../models/post')
const postsData = require('../data/posts.json')

exports.addPost = (req, res, next) => {
    const username = req.body.username
    const description = req.body.description
    const type = req.body.type
    // const imagePath = req.body.imagePath
    const imagePath = req.file.path.replace("\\" ,"/");
    const post = new Post(null, username, description, type, imagePath)
    post.obtainLabels()
    post.save()
    res.status(200)
}

exports.getPosts = (req, res, next) => {
    res.json(postsData)
}

exports.getPost = (req, res, next) => {
    const postId = req.params.productId;
    Post.findById(postId, (post) => {
        res.json(post.toJson())
    })
}