const express = require('express');
const Post = require('../models/post')
const postsData = require('../data/posts.json')
const fs = require('fs');
const path = require('path')
const rootDir = require('../util/path')

exports.addPost = async (req, res, next) => {
    const username = req.body.username
    const description = req.body.description
    const type = req.body.type
    const imagePath = req.file.path.replace(/\\/g, "/").split('/').slice(-3).join('/');
    const labels = ['Science', 'Fun', 'Movie']
    const post = new Post({
        username: username, 
        description: description, 
        type: type, 
        imagePath: imagePath,
        label: labels})
    // await post.obtainLabels()
    post.save()
    .then(result => {
        res.status(200).json({message: 'Post Created', postId: post._id})
    }).catch(err =>{
        console.log(err)
    })
    

}

exports.getPosts = (req, res, next) => {
    Post.find()
    .then(posts => {
        if(!posts){
            const error = new Error("No product found.")
            error.statusCode = 401
            throw error
        }
        res.status(200).json(posts)
    })
    .catch(err => {
        console.log(err)
    })
}

exports.getPost = (req, res, next) => {
    const postId = req.params.postID;
    console.log(postId)
    Post.find({_id:postId})
    .then(post => {
        res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
        res.status(201).json(post)
    })
}