var express = require("express");
var router = express.Router();
var Book = require("../model/Book");

//list all book
router.get("/", (req, res, next) => {
  Book.find({}, (err, book) => {
    res.status(200).json({ book });
  });
});
// Get Single Book
router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  Book.findById(id, (err, book) => {
    if (err) return next(err);
    res.status(200).json({ book });
  });
});

// Ceate a book
router.post("/", (req, res, next) => {
  var data = req.body;
  data.tags = data.tags.trim().split(",");
  Book.create(data, (err, book) => {
    if (err) return next(err);
    res.status(200).json({ book });
  });
});

//   Edit a book
router.put("/:id", (req, res, next) => {
  var id = req.params.id;
  var data = req.body;
  data.tags = data.tags.trim().split(",");
  Book.findByIdAndUpdate(id, data, (err, book) => {
    if (err) return next(err);
    res.status(200).json({ book });
  });
});

module.exports = router;
