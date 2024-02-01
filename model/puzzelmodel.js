var mongoose= require('mongoose');
var puzzelSchema=new mongoose.Schema({
   
    puzzel_name:{
        type:String
    },
    p_image:{
        type:String
    },
    puzzel_string:{
        type:String
    },
    cat_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cetegori"
    },
    win_id:{
        type:Array,
        default:0
    }
})
module.exports=mongoose.model('puzzel',puzzelSchema);