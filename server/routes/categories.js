import express from "express";
import auth from "../middleware/auth.js";

import {
  createCategory,
  deleteCategory,
  getCategories,
} from "../controllers/categories.js";

const router = express.Router();

router.post("/", createCategory);
router.get("/", getCategories);
router.delete("/:id", deleteCategory);

export default router;
