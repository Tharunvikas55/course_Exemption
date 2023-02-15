const express=require('express');
const newaccController=require('../Controller/newaccController');

const router= express.Router();

router.get('/create',newaccController.student_create_get);
router.post('/create',newaccController.student_create_post);

module.exports=router;

