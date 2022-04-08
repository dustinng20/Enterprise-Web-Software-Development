const router = require("express").Router();
const Categories = require("../models/Categories");
const User = require("../models/User");

// create a post
router.post("/", async (req, res) => {
  const newCategories = new Categories(req.body);
  try {
    const savedPost = await newCategories.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
