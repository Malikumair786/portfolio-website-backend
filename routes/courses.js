import Express from "express";
import {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/CourseController.js";
const router = Express.Router();

router.get("/", getAllCourses);
router.get("/:id", getCourse);
router.post("/", addCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

export default router;
