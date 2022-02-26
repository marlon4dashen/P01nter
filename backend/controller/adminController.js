const express = require('express');
const Post = require('../models/post')
const postsData = require('../data/posts.json')

exports.addPost = async (req, res, next) => {
    const username = req.body.username
    const description = req.body.description
    const type = req.body.type
    console.log(req.file.path)
    const imagePath = req.file.path.replace(/\\/g, "/").split('/').slice(-3).join('/');
    console.log(imagePath)
    const post = new Post(null, username, description, type, imagePath)
    await post.obtainLabels()
    post.save()
    res.status(200).json(post)

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