var mongoose= require('mongoose');
const cetegoriSchema = new mongoose.Schema({
    categoriname:{
        type:String,
    }
   
});

module.exports= mongoose.model('cetegori',cetegoriSchema);
