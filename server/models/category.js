import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    content: {
      type: String,
      max: 50000,
    },

    dateStart: {
      type: Date,
    },
    dateEnd: {
      type: Date,
    },
    categoriesStatus: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Category", categorySchema);
