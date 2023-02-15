const express=require('express');

const courseController=require('../Controller/courseController');

const route=express.Router();

// route.get('/',courseController.show_course);
// route.get('/course',courseController.show_course);
route.get('/createcourse',courseController.new_course_get);
route.post('/createcourse',courseController.new_course_post);

module.exports=route;