// title, period, company, description,
import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  startDate: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  endDate: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  company: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  description: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
});

const Experience = mongoose.model("Experience", ExperienceSchema);
export default Experience;
