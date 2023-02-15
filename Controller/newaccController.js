const Studentdet= require('../model/newacc');

exports.student_create_get=(req,res)=>{
    res.render("register",{title:"student register"})
  };

  exports.student_create_post=(req,res)=>{
    const newstu=new Studentdet(req.body);
    newstu.save()
       .then(result=>{
        res.redirect('/');
       })
       .catch(err=>{
        console.log(err);
       });
  };






