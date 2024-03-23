// import Express from "express";
// // import {
// //   getAllExperiences,
// //   getExperience,
// //   addExperience,
// //   updateExperience,
// //   deleteExperience,
// // } from "../controllers/ExperienceController.js";

// import getExperience from "../controllers/ExperienceController.js";

// const router = Express.Router();

// // router.get("/", getAllExperiences);
// router.get("/:id", getExperience);
// // router.post("/", addExperience);
// // router.put("/:id", updateExperience);
// // router.delete("/:id", deleteExperience);

// export default router;

import Express from "express";
import {
  getAllExperiences,
  getExperience,
  addExperience,
  updateExperience,
  deleteExperience,
} from "../controllers/ExperienceController.js";
const router = Express.Router();

router.get("/", getAllExperiences);
router.get("/:id", getExperience);
router.post("/", addExperience);
router.put("/:id", updateExperience);
router.delete("/:id", deleteExperience);

export default router;
