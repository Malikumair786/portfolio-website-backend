import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  greetings: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  name: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  shortTitles: {
    type: String,
    required: true,
    min: 20,
    max: 200,
  },
  description: {
    type: String,
    required: true,
    min: 20,
    max: 700,
  },
  aboutMe: {
    type: String,
    required: true,
    min: 20,
    max: 1500,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String], // Array of strings
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
