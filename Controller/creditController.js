const credit=require('../model/creditformschema');

exports.get_form=(req,res)=>{
    res.render('creditform')
};

exports.post_form=(req,res)=>{
    const newcredit=new credit(req.body);
    newcredit.save()
    .then(result=>{
      res.redirect('/');
    })
    .catch(err=>{
        console.log(err);
    });
};
