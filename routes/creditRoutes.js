const express=require('express');

const creditController=require('../Controller/creditController');

const routes=express.Router();

routes.get('/',creditController.get_form);
routes.post('/credit_submit',creditController.post_form);

module.exports=routes;