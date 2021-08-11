const express = require("express");
const router = express.Router();
const Card = require("../models/dataModel");
router.get("/", async (req, res) => {
  try {
    const doc = await Card.find();
    if (!doc) {
      res.json({
        message: "failed",
      });
    }
    res.json({ status: "success", data: doc });
  } catch (e) {
    res.json({
      message: "failed",
    });
  }
});
router.post("/add-card", async (req, res) => {
  const { question, answer } = req.body;
  try {
    const newCard = Card.create({
      question,
      answer,
    });
    if (!newCard) {
      res.json({
        message: "failed",
      });
    }
    res.json({
      message: "success",
      data: newCard,
    });
  } catch (e) {
    res.json({
      message: "failed",
    });
  }
});

module.exports = router;
