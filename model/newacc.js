const mongoose=require('mongoose');
const schema=mongoose.Schema;

const studentSchema= new schema({
    studentname: {
        type:String,
        required:true,
    },
    studentrollno:{
        type:String,
        required:true,
    },
    studentpassword:{
        type:String,
        required:true,
    },
    studentDOB:{
        type:String,
        required:true,
    },
    studentemail:{
        type:String,
        required:true,
    },
    studepart:{
        type:String,
        required:true,
    },
   

});
 
const Studentdet=mongoose.model('Studentdet',studentSchema);

module.exports=Studentdet;