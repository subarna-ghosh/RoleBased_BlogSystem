const BModel = require("../Model/BModel");
const cloudinary = require("../config/cloudinary");
const fs = require("fs").promises;
class AuthorController {
  async createBlog(req, res) {
    try {
      console.log(req.body);
      const { title, content } = req.body;
      if (!title || !content) {
        return res.status(400).json({
          success: false,
          message: "all fields are needed!",
        });
      }

      const buildBlog = new BModel({
        title,
        content,
        createdBy: req.user._id,
      });

      console.log(req.file);
      if (req.file) {
        const storeResult = await cloudinary.uploader.upload(req.file.path, {
          folder: "blog-profile",
        });
        console.log(storeResult);
        await fs.unlink(req.file.path);
        buildBlog.blogImage = storeResult.secure_url;
        buildBlog.imageBlogPublicId = storeResult.public_id;
      }
      const Blog = await buildBlog.save();
      return res.status(200).json({
        success: true,
        message: "Blog created successfully!",
        Blog,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }

  async viewBlogs(req, res) {
    try {
      const blogs = await BModel.find();
      return res.status(200).json({
        success: true,
        message: "All drafted blogs are listed below!",
        count:blogs.length,
        blogs
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
module.exports = new AuthorController();
