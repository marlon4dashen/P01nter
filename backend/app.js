const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
const rootDir = require('./util/path')
const adminRoutes = require('./routes/admin')

const app = express();
app.use(express.json());
app.use(bodyParser.json())

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,  path.join(rootDir, 'data', 'images'))
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

app.use(multer({ storage : fileStorage }).single('image'))
app.use(cors());
app.use(express.static(path.join(__dirname, 'data', 'images')));


app.use(adminRoutes)

app.set('port', 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${server.address().port}`);
});