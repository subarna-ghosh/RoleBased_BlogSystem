const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
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
    profileImage: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
    },
    imagePublicId: {
      type: String,
      default: null,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const UModel = mongoose.model("User", userSchema);
module.exports = UModel;
