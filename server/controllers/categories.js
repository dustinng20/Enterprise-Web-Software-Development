import express from "express";
import mongoose from "mongoose";

import Category from "../models/category.js";

const router = express.Router();

export const getCategories = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 50;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await Category.countDocuments({});

    const categories = await Category.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({
      data: categories,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findById(id);

    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCategory = async (req, res) => {
  const category = req.body;

  const newCategory = new Category({
    ...category,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No category with id: ${id}`);

  await Category.findByIdAndRemove(id);

  res.json({ message: "category deleted successfully." });
};

export default router;
