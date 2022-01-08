const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Blog = mongoose.model(
  "Blog",
  new Schema({
    image: String,
    title: String,
    desc: String,
  })
);

module.exports = Blog;
