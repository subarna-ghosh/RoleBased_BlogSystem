const express = require("express");
const Router = express();
const AuthorController = require("../controller/AuthorController");
const uploadBlogImage = require("../utils/uploadImage");
const authCheck = require("../middleware/authCheck");
const allowRoles = require("../middleware/allowRoles");

// create blog
Router.post('/api/create',authCheck,allowRoles("author"),uploadBlogImage.single('blogImage'),AuthorController.createBlog)
// read own blogs
Router.get('/api/view',authCheck,allowRoles("author"),AuthorController.viewBlogs)

module.exports = Router;
