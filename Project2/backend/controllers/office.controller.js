const db = require("../models");
const Office = db.offices;

// Get All
exports.findAll = async (req, res) => {
  try {
    const offices = await Office.findAll();
    res.json(offices);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Terjadi kesalahan saat mengambil data office.",
    });
  }
};

// Get One
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const office = await Office.findByPk(id);
    if (office) {
      res.json(office);
    } else {
      res.status(404).json({
        message: `Office dengan id=${id} tidak ditemukan.`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Terjadi kesalahan saat mengambil data office dengan id=${id}.`,
    });
  }
};
