const router = require("express").Router();
const offices = require("../controllers/office.controller.js");

// Get All
router.get("/", offices.findAll);

// Get One
router.get("/:id", offices.findOne);

module.exports = router;
