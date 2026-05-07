const BModel = require("../Model/BModel");
const cloudinary = require("../config/cloudinary");
const fs = require("fs").promises;
class AdminController {
  async viewAllBlogs(req, res) {
    try {
      const blogs = await BModel.find();
      return res.status(200).json({
        success: true,
        message: "Blogs are listed below!",
        count: blogs.length,
        blogs,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }

  async publishBlog(req, res) {
    try {
      const id = req.params.id;
      const data = await BModel.findByIdAndUpdate(
        id,
        { status: "published" },
        { new: true },
      );
      return res.status(200).json({
        success: true,
        message: "Blog published successfully!",
        data,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }

  async hardDeleteBlog(req, res) {
    try {
      const id = req.params.id;
      const userDel=await BModel.findById(id)
      if(!userDel)
      {
        return res.status(400).json({
          success:false,
          message:"user data does not exist!"
        })
      }
      if(userDel.imageBlogPublicId)
      {
        //delete image from cloudinary
        await cloudinary.uploader.destroy(userDel.imageBlogPublicId)
      }

       //delete blog from DB
      const delBlog = await BModel.findByIdAndDelete(id);
      
      return res.status(200).json({
        success: true,
        message: "Blog deleted successfully!",
        delBlog
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
module.exports = new AdminController();
