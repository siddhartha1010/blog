import mongoose, { Mongoose } from "mongoose";

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: [true, "An article must have a name"],
    required: true,
  },
  description: {
    type: String,
  },
  markdown: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Article = mongoose.model("Article", articleSchema);
