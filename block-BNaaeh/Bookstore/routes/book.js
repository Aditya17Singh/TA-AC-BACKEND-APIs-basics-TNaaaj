var express = require("express");
var router = express.Router();
var Book = require("../model/Book");

//List Book
router.get("/", async (req, res, next) => {
  try {
    var book = await Book.find({});
    res.status(200).json({ book });
    next();
  } catch (error) {
    return error;
  }
});

//create book
router.get("/new", async (req, res, next) => {
  try {
    res.status(200).json({ message: "bookinfo" });
  } catch (error) {
    return error;
  }
});

router.post("/", async (req, res, next) => {
  try {
    var book = await Book.create(req.body);
    res.status(200).json({ book });
    next();
  } catch (error) {
    return error;
  }
});

//fetch single book
router.get("/:id", async (req, res, next) => {
  var id = req.params.id;
  try {
    var book = await Book.findById(id);
    res.status(200).json({ book });
    next();
  } catch (error) {
    return error;
  }
});

//update book
router.get("/:id/edit", async (req, res, next) => {
  var id = req.params.id;
  try {
    var edit = await Book.findByIdAndUpdate(id);
    res.status(200).json({ edit });
    console.log(edit);
    next();
  } catch (error) {
    return error;
  }
});

router.put("/:id", async (req, res, next) => {
  var id = req.params.id;
  try {
    var update = await Book.findByIdAndUpdate(id, req.body);
    res.status(200).json({ update });
    next();
  } catch (error) {
    return error;
  }
});

//delete
router.get("/:id/delete", async (req, res, next) => {
  var id = req.params.id;
  try {
    var del = await Book.findByIdAndDelete(id);
    res.status(200).json({ del });
    next();
  } catch (error) {
    return error;
  }
});

module.exports = router;
