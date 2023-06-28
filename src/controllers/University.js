const University = require("../models/University");
const express = require("express");
const router = express.Router();

// Create a new university
// router.post("/create", async (req, res, next) => {
//   const {
//     title,
//     subtitle,
//     priceRank,
//     priceRange,
//     description,
//     fields,
//     imagePath,
//     country,
//     city,
//     foundedDate,
//   } = req.body;

//   try {
//     const university = new University({
//       title,
//       subtitle,
//       priceRank,
//       priceRange,
//       description,
//       fields,
//       imagePath,
//       country,
//       city,
//       foundedDate,
//     });

//     await university.save();

//     res.status(201).json({ university });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Failed to create university." });
//   }
// });

// Get all universities
router.get("/getAll", async (req, res, next) => {
  try {
    const universities = await University.find({});
    res.json({ universities });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch universities." });
  }
});

module.exports = router;
