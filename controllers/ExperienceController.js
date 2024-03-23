// getAllExperiences,
// getExperience,
// addExperience,
// updateExperience,
// deleteExperience,

import Experience from "../models/Experience.js";

export const getAllExperiences = async (req, res, next) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getExperience = async (req, res, next) => {
  const { id } = req.params;
  try {
    const experience = await Course.findById(id);
    res.status(200).json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addExperience = async (req, res, next) => {
  const experience = new Experience(req.body);
  try {
    const newExperience = await experience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateExperience = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateExperience = await Course.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateExperience) {
      return res.status(404).json({ message: "Experience not found" });
    }
    res.status(200).json(updateExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteExperience = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteCourse = await Experience.findByIdAndDelete(id);
    if (!deleteCourse) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
