const router = require("express").Router();
const orders = require("../controllers/order.controller.js");

// Get All
router.get("/", orders.findAll);

// Get One
router.get("/:id", orders.findOne);

module.exports = router;
