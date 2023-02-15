const mongoose=require('mongoose');
const schema=mongoose.Schema;
const newcourse=new schema({
    CourseCode:{
        type:String,
        required:true,
    },

    CourseName:{
        type:String,
        required:true,
    },
});

const Coursedetails=mongoose.model('Coursedetails',newcourse);

module.exports=Coursedetails;