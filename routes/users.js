var express = require('express');
var router = express.Router();
var user=require('../controller/usercontroller');


/* GET home page. */
router.post('/insert',user.insert);//params
router.post('/login',user.login);//params
router.get('/logout',user.logout);//params




module.exports = router;
