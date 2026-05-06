const express=require('express')
const Router=express()
const AdminController=require('../controller/AdminController')
const authCheck=require('../middleware/authCheck')
const allowRoles=require('../middleware/allowRoles')

// view all blogs
Router.get('/admin/view',authCheck,allowRoles("admin"),AdminController.viewAllBlogs)

// publish blogs
Router.patch('/admin/publish/:id',authCheck,allowRoles("admin"),AdminController.publishBlog)

// delete blog
Router.delete('/admin/hard/delete/:id',authCheck,allowRoles("admin"),AdminController.hardDeleteBlog)

module.exports=Router