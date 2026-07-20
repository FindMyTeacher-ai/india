const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    phone: {
      type: String,
      required: true
    },

    subjects: [
      {
        type: String
      }
    ],

    qualification: {
      type: String,
      required: true
    },

    experience: {
      type: Number,
      required: true
    },

    fees: {
      type: Number,
      required: true
    },

    mode: {
      type: String,
      enum: ["online", "offline", "both"],
      default: "both"
    },

    city: {
      type: String,
      required: true
    },

    languages: [
      {
        type: String
      }
    ],

    bio: {
      type: String
    },

    rating: {
      type: Number,
      default: 0
    },

    totalReviews: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Teacher", teacherSchema);