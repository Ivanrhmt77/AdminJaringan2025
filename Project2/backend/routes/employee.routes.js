const router = require("express").Router();
const employees = require("../controllers/employee.controller.js");

// Get All
router.get("/", employees.findAll);

// Get One
router.get("/:id", employees.findOne);

module.exports = router;
