const router = require("express").Router();
const payments = require("../controllers/payment.controller.js");

// Get All
router.get("/", payments.findAll);

// Get One
router.get("/:customerNumber/:checkNumber", payments.findOne);

module.exports = router;
