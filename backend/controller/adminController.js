const express = require('express');
const Post = require('../models/post')
const postsData = require('../data/posts.json')

exports.addPost = (req, res, next) => {
    const username = req.body.username
    const description = req.body.description
    const type = req.body.type
    if (!req.file){
        console.log("No picture added")
    }else{
        const image = req.file.path
    }
    // const imagePath = req.body.imagePath
    const imagePath = image.replace("\\" ,"/");
    const post = new Post(null, username, description, type, imagePath)
    post.obtainLabels().then(() => {
        post.save().then(() => {
            res.status(201)
        })
    })
}

exports.getPosts = (req, res, next) => {
    res.status(201).json(postsData)
}

exports.getPost = (req, res, next) => {
    const postId = req.params.productId;
    Post.findById(postId, (post) => {
        res.status(201).json(post.toJson())
    })
}