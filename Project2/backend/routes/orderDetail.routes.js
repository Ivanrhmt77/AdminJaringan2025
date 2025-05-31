const router = require("express").Router();
const orderDetails = require("../controllers/orderDetail.controller.js");

// Get All
router.get("/", orderDetails.findAll);

// Get One
router.get("/:orderId/:productCode", orderDetails.findOne);

module.exports = router;
