// getAllCourses,
// getCourse,
// addCourse,
// updateCourse,
// deleteCourse,

import Course from "../models/Course.js";

export const getAllCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCourse = async (req, res, next) => {
  const { id } = req.params;
  try {
    const admins = await Course.findById(id);
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addCourse = async (req, res, next) => {
  //   const course = new Course(req.body);
  //   try {
  //     const newCourse = await course.save();
  //     res.status(201).json(newCourse);
  //   } catch (error) {
  //     res.status(404).json({ message: error.message });
  //   }

  const course = new Course(req.body);
  try {
    const newCourse = await course.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateCourse = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateCourse = await Course.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateCourse) {
      return res.status(404).json({ message: "Experience not found" });
    }
    res.status(200).json(updateCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCourse = async (req, res, next) => {
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
