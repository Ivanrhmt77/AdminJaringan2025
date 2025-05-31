const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/customers", require("./routes/customer.routes"));
app.use("/api/products", require("./routes/product.routes"));
app.use("/api/productLines", require("./routes/productLine.routes"));

// Handle 404
app.use((req, res) => {
  res.status(404).json({
    message: "Route tidak ditemukan",
  });
});

// Handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Terjadi kesalahan di server",
  });
});

const PORT = process.env.PORT || 5000;

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server berjalan di port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Gagal sinkronisasi database:", err);
  });
