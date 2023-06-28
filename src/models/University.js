const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const universitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    priceRank: {
      type: String,
      enum: ["cheap", "belowAverage", "average", "aboveAverage", "expensive"],
      required: true,
    },
    priceRange: { type: String, required: true },
    description: { type: String, required: true },
    fields: [{ type: String, required: true }],
    imagePath: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    foundedDate: { type: Number, required: true },
  },
  { timestamps: true }
);

universitySchema.plugin(uniqueValidator);

const University = mongoose.model("University", universitySchema);

module.exports = University;
