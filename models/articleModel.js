import mongoose, { Mongoose } from "mongoose";
import slugify from "slugify";

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "An article must have a name"],
  },
  slug: String,
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

//yo yauta document middleware ho jun chai save aathawa create hunu aagi run hunxa
//slug banauni ya bata basically yauta string ho jun hami url ma halna skxum based on name

articleSchema.pre("save", function (next) {
  // console.log(this);
  // console.log((this.title = "hello"));//jun document point vai rako tellai point garxa
  this.slug = slugify(this.title, { lower: true });
  next();
});

// articleSchema.post("save", function (doc, next) {
//   console.log(doc);
//   next();
// });

export const Article = mongoose.model("Article", articleSchema);
