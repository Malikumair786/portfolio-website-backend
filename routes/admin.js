import Express from "express";
import {
  getAdmin,
  addAdmin,
  updateAdmin,
  deleteAdmin,
} from "../controllers/AdminController.js";
const router = Express.Router();

router.get("/admin", getAdmin);
router.post("/admin", addAdmin);
router.put("/admin/:id", updateAdmin);
router.delete("/admin/:id", deleteAdmin);

export default router;
