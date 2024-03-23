// title, description, image, link, techStack(array)
import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  techStack: {
    type: Array,
    required: true,
  },
});

const Projects = mongoose.model("Projects", ProjectsSchema);

export default Projects;
