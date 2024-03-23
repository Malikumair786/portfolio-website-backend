// course name, description, image, link to navigate
import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
