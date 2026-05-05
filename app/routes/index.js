const express=require('express')
const Router=express()

const adminRoutes=require('./adminRoutes')
Router.use(adminRoutes)

const userRoutes=require('./userRoutes')
Router.use('/blog',userRoutes)

module.exports=Router