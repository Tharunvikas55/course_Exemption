const mongoose=require('mongoose');
const schema=mongoose.Schema;

const details=new schema({
    sname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    totcredits:{
        type:String,
        required:true,
    },
    Department:{
        type:String,
        required:true,
    },
    Roll_no:{
        type:String,
        required:true,
    },
    proof:{
        type:Buffer,
        required:true,
    },
});

const credit=mongoose.model('credit',details);

module.exports=credit;