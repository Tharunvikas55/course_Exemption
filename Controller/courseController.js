const Coursedetails=require('../model/course');


const show_course=(req,res)=>{
    Coursedetails.find().sort({createdAt:-1})
    .then(result=>{
        res.render('admin',{course:result});
    });
 }

const new_course_get = (req,res)=>{
    res.render('addcourse');
};

const new_course_post=(req,res)=>{
    const courses=new Coursedetails(req.body);
    courses.save()
    .then(result=>{
        res.redirect('admin');
    })
    .catch(err=>{
        console.log(err);
    });
}

 module.exports={
    show_course,
    new_course_get,
    new_course_post
 }
