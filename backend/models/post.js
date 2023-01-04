// const fs = require('fs');
// const path = require('path');
// const rootDir = require('../util/path')
// const p = path.join(rootDir, 'data', 'posts.json')
// const getLabels = require('../google/labels')


// const getPostsFromFile = cb => {
//     fs.readFile(p, (err, fileContent) => {
//       if (err) {
//         cb([]);
//       } else {
//         cb(JSON.parse(fileContent));
//       }
//     });
//   };

// module.exports = class Post {
//     constructor (id, username, description, type, imagePath) {
//         this.username = username
//         this.description = description
//         this.imagePath = imagePath
//         this.id = id
//         this.type = type
//         this.likes = 0
//         this.label = {}
//         //Generate
//     }

//     save() {
//         getPostsFromFile(posts => {
//             this.id = Math.random().toString();
//             posts.push(this);
//             fs.writeFile(p, JSON.stringify(posts), err => {
//               console.log(err);
//             });
//           })
//     }

//     async obtainLabels() {
//         const labels = await getLabels(this.imagePath)
//         this.label = labels
//     }

//     static fetchAll(cb) {
//         getPostsFromFile(cb);
//     }

//     static findById(id, cb) {
//         getPostsFromFile(posts => {
//           const post= posts.find(p => p.id === id);
//           cb(post);
//         });
//     }

// }


const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    label: [
      {type:String} 
    ]

    
})

module.exports = mongoose.model('Post', postSchema)