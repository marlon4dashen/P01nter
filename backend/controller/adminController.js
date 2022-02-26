const express = require('express');
const Post = require('../models/post')
const postsData = require('../data/posts.json')

exports.addPost = (req, res, next) => {
    const username = req.body.username
    const description = req.body.description
    const type = req.body.type
    const imagePath = req.file.path.replace("\\" ,"/");
    const post = new Post(null, username, description, type, imagePath)
    post.obtainLabels().then(() => {
        post.save().then(() => {
            res.status(201)
        })
    })
}

exports.getPosts = (req, res, next) => {
    res.status(200).json(postsData)
}

exports.getPost = (req, res, next) => {
    const postId = req.params.postID;
    console.log(postId)
    Post.findById(postId, (post) => {
        console.log(post)
        res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
        res.status(201).json(post)
    })
}