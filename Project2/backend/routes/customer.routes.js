const router = require("express").Router();
const customers = require("../controllers/customer.controller.js");

// Create a new Customer
router.post("/", customers.create);

// Get All Customers
router.get("/", customers.findAll);

// Get a single Customer
router.get("/:id", customers.findOne);

// Update a Customer
router.put("/:id", customers.update);

// Delete a Customer
router.delete("/:id", customers.delete);

module.exports = router;
