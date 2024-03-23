import Express from "express";
import {
  getAllProjects,
  getProject,
  addProject,
  updateProject,
  deleteProject,
} from "../controllers/ProjectController.js";
const router = Express.Router();

router.get("/", getAllProjects);

router.get("/:id", getProject);
router.post("/", addProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;
