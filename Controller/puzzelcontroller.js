var puzzel=require('../model/puzzelmodel');

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
console.log(makeid(5));

function shuffleWord (word){
    var shuffledWord = '';
    word = word.split('');
    while (word.length > 0) {
      shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffledWord;
}

exports.insert=async(req,res)=>
{   
    // console.log('hello');
     var image=req. file.originalname;
     req.body.image=image;
     var total_random_char=16-req.body.puzzel_name.length;
     var random_char=makeid(total_random_char);
    random_char=random_char+req.body.puzzel_name;
    random_char=shuffleWord(random_char);
    req.body.puzzel_string=random_char;
    
    var data=await puzzel.create(req.body);

    res.status(200).json({
        status:"data insert",
        data
    })
}
exports.getdata=async(req,res)=>
{   
    console.log('hello');
    //  var image=req. file.originalname;
    //  req.body.image=image;
    
    var data=await puzzel.find().populate("cat_id");

    res.status(200).json({
        status:"data insert",
        data
    })
}