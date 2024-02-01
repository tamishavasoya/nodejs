var express = require('express');
var router = express.Router();
var cetegori=require('../Controller/cetegoricontroller');


/* GET home page. */

router.get('/',cetegori.getdata);//params
router.post('/',cetegori.insert);//params



module.exports = router;
