const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./models");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database sync
db.sequelize
  .sync()
  .then(() => {
    console.log("Database synced.");
  })
  .catch((err) => {
    console.log("Failed to sync database:", err.message);
  });

// Routes
app.use("/api/customers", require("./routes/customer.routes"));
app.use("/api/employees", require("./routes/employee.routes"));
app.use("/api/offices", require("./routes/office.routes"));
app.use("/api/orders", require("./routes/order.routes"));
app.use("/api/orderDetails", require("./routes/orderDetail.routes"));
app.use("/api/payments", require("./routes/payment.routes"));

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Classic Models Management System API" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
