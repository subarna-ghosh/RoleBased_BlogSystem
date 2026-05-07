const express=require('express')
const Router=express()
const UserController=require('../controller/UserController')
const authCheck=require('../middleware/authCheck')
const uploadImage=require('../utils/uploadImage')
const checkRoles=require('../middleware/allowRoles')

// user register
Router.post('/user/register',uploadImage.single('profileImage'),UserController.register)
// user login
Router.post('/user/login',UserController.login)
// view published blogs
Router.get('/user/view',authCheck,checkRoles("user"),UserController.viewBlogs)

module.exports=Router