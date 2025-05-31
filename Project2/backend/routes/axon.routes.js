const router = require("express").Router();
const axons = require("../controllers/axon.controller.js");

// Create
router.post("/", axons.create);

// Get All
router.get("/", axons.findAll);

// Get One
router.get("/:id", axons.findOne);

// Update
router.put("/:id", axons.update);

// Delete
router.delete("/:id", axons.delete);

module.exports = router;
