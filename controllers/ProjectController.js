// getAllProjects,
// getProject,
// addProject,
// updateProject,
// deleteProject,

import Projects from "../models/Projects.js";

export const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Projects.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProject = async (req, res, next) => {
  const { id } = req.params;
  try {
    const project = await Course.findById(id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addProject = async (req, res, next) => {
  const project = new Projects(req.body);
  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProject = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateProject = await Projects.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateProject) {
      return res.status(404).json({ message: "Experience not found" });
    }
    res.status(200).json(updateProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProject = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteCourse = await Admin.findByIdAndDelete(id);
    if (!deleteCourse) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
