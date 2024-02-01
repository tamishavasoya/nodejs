var cetegorimodel = require('../model/cetegorimodel');

exports.insert=async(req,res)=>
{   console.log('hello');
    //  var image=req. file.originalname;
    //  req.body.image=image;
    var data=await cetegorimodel.create(req.body);

    res.status(200).json({
        status:"data select",
        data
    })
}
exports.getdata=async(req,res)=>
{
    var data=await cetegorimodel.find();
   
    res.status(200).json({
        status:"data select",
        data
    })
}
