const express=require('express')
const Router=express()

const adminRoutes=require('./adminRoutes')
Router.use(adminRoutes)

const userRoutes=require('./userRoutes')
Router.use('/blog',userRoutes)

const authorRoutes=require('./authorRoutes')
Router.use('/auth',authorRoutes)

module.exports=Router