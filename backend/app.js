const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
const rootDir = require('./util/path')
const adminRoutes = require('./routes/admin')
var mongoose = require('mongoose');
require('dotenv/config');

const app = express();
app.use(bodyParser.json())

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,  path.join(rootDir, 'data', 'images'))
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

// const { v4: uuidv4 } = require('uuid');
 
// const fileStorage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, path.join(rootDir, 'data', 'images'));
//     },
//     filename: function(req, file, cb) {
//         cb(null, uuidv4())
//     }
// });

app.use(multer({ storage : fileStorage }).single('image'))
app.use(cors());



app.use('/data/images', express.static(path.join(__dirname, 'data', 'images')));


app.use(adminRoutes)

mongoose.connect(process.env.MONGO_URL).then(result => {
        app.listen(process.env.PORT)
    }).catch(err => {
        console.log(err)
    });