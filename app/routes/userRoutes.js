const express=require('express')
const Router=express()
const UserController=require('../controller/UserController')
const authCheck=require('../middleware/authCheck')
const uploadImage=require('../utils/uploadImage')

Router.post('/user/register',uploadImage.single('profileImage'),UserController.register)
Router.post('/user/login',UserController.login)

module.exports=Router