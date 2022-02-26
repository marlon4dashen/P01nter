const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path')
const p = path.join(rootDir, 'data', 'posts.json')
const getLabels = require('../google/labels')


const getPostsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  };

module.exports = class Post {
    constructor (id, username, description, type, imagePath) {
        this.username = username
        this.description = description
        this.imagePath = imagePath
        this.id = id
        this.type = type
        this.likes = 0
        this.label = {}
        //Generate
    }

    save() {
        getPostsFromFile(posts => {
            this.id = Math.random().toString();
            posts.push(this);
            fs.writeFile(p, JSON.stringify(posts), err => {
              console.log(err);
            });
          })
    }

    obtainLabels() {
        getLabels(this.imagePath).then((labels) => {
            this.label = labels
        })
    }

    static fetchAll(cb) {
        getPostsFromFile(cb);
    }

    static findById(id, cb) {
        getPostsFromFile(posts => {
          const post= posts.find(p => p.id === id);
          cb(post);
        });
    }

    toJson() {
        return {
            "username": this.username,
            "description": this.description,
            "imagePath": this.imagePath,
            "type": this.type,
            "likes": this.likes,
            "labels": this.label,
            "id": this.id
        }
    }

}