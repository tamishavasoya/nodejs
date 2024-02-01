var express = require('express');
var router = express.Router();
var  multer=require('multer');
var puzzel=require('../Controller/puzzelcontroller');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  })
  const upload = multer({ storage: storage })


/* GET home page. */
router.get('/',puzzel.getdata);//params
router.post('/',upload.single('p_image'),puzzel.insert);//params

module.exports = router;
