import Express from "express";
import {
  getAdmin,
  addAdmin,
  updateAdmin,
  deleteAdmin,
} from "../controllers/AdminController.js";
const router = Express.Router();

router.get("/", getAdmin);
router.post("/", addAdmin);
router.put("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);

export default router;
