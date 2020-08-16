const express = require('express');
const router = express.Router();

//import homecontroller from controllers
const homeController= require('../controllers/home_controller')

//router for home page
router.get('/',homeController.home);
router.post('/create-todo',homeController.homepost);
router.get('/delete-notes',homeController.deletetodo);
module.exports=router;