const db = require("../models");
const ProductLine = db.productLines;

// Get All
exports.findAll = async (req, res) => {
  try {
    const productLines = await ProductLine.findAll();
    res.json(productLines);
  } catch (err) {
    res.status(500).json({
      message:
        err.message || "Terjadi kesalahan saat mengambil data product line.",
    });
  }
};

// Get One
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const productLine = await ProductLine.findByPk(id);
    if (productLine) {
      res.json(productLine);
    } else {
      res.status(404).json({
        message: `Product line dengan id=${id} tidak ditemukan.`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Terjadi kesalahan saat mengambil data product line dengan id=${id}.`,
    });
  }
};
