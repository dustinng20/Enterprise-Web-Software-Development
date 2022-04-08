const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      max: 50000,
      required: true,
    },

    dateStart: {
      required: true,
      type: Date,
    },
    dateEnd: {
      required: true,
      type: Date,
    },
    categoriesStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Categories", PostSchema);
