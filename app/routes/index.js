const express=require('express')
const Router=express()

const adminRoutes=require('./adminRoutes')
Router.use(adminRoutes)

module.exports=Router