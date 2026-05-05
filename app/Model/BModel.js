const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "author", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const BModel = mongoose.model("Blog", blogSchema);
module.exports = BModel;
