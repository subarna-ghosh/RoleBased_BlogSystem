const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    blogImage: {
      type: String,
      default:
        "https://img.magnific.com/premium-vector/cute-book-herbarium-journal-literature-world-book-day-vector-illustration-flat-style_254685-2882.jpg?semt=ais_hybrid&w=740&q=80",
    },
    imageBlogPublicId: {
      type: String,
      default: null,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isCreatedBy: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const BModel = mongoose.model("Blog", blogSchema);
module.exports = BModel;
