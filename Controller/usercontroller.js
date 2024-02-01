var usermodel= require('../model/usermodel');
const bcrypt = require('bcrypt');
var login=0;
const storage = require('node-persist');
storage.init( /* options ... */ );



exports.insert=async(req,res)=>
{   
    console.log('hello');
    //  var image=req. file.originalname;
    //  req.body.image=image;
    var b_pass=await bcrypt.hash(req.body.password,10);
    req.body.password=b_pass;

    var data=await usermodel.create(req.body);

    res.status(200).json({
        data
    })
}
exports.login=async(req,res)=>
{
    var data=await usermodel.find({"email":req.body.email});
    // console.log(data);

    var login_data=await storage.getItem('user_id')

if(login_data==undefined)
{
    // console.log("hello");
    if(data.length==1){
            console.log('hello')
        bcrypt.compare(req.body.password,data[0].password,async function(err,result){
            // console.log(data);

            if(result==true){
                
                // var token=await jwt.sign({id:data[0].id},"cdmi");
                await storage.setItem('user_id',data[0].id);
                login=1;
                res.status(200).json({
                    status:"login",
                    // token
                })
            }
            else
            {
                res.status(200).json({
                    status:"check email and password"
                })
            }
        });
        
    }
    else
    {
        res.status(200).json({
            status:"check your email and password"
        })
    }
}else{
    res.status(200).json({
        status:"user is alredy login"
    })

}
}
exports.logout=async(req,res)=>{
    await storage.clear();
    res.status(200).json({
        status:"user is logout"
    })
}
