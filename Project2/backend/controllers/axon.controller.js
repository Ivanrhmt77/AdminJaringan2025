const db = require("../models");
const Axon = db.axons;

// Create
exports.create = async (req, res) => {
  try {
    const axon = await Axon.create(req.body);
    res.json(axon);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Terjadi kesalahan saat membuat data Axon.",
    });
  }
};

// Get All
exports.findAll = async (req, res) => {
  try {
    const axons = await Axon.findAll();
    res.json(axons);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Terjadi kesalahan saat mengambil data Axon.",
    });
  }
};

// Get One
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const axon = await Axon.findByPk(id);
    if (axon) {
      res.json(axon);
    } else {
      res.status(404).json({
        message: `Data Axon dengan id=${id} tidak ditemukan.`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Terjadi kesalahan saat mengambil data Axon dengan id=${id}.`,
    });
  }
};

// Update
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await Axon.update(req.body, {
      where: { id: id },
    });
    if (num == 1) {
      res.json({
        message: "Data Axon berhasil diperbarui.",
      });
    } else {
      res.status(404).json({
        message: `Data Axon dengan id=${id} tidak ditemukan.`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Terjadi kesalahan saat memperbarui data Axon dengan id=${id}.`,
    });
  }
};

// Delete
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await Axon.destroy({
      where: { id: id },
    });
    if (num == 1) {
      res.json({
        message: "Data Axon berhasil dihapus.",
      });
    } else {
      res.status(404).json({
        message: `Data Axon dengan id=${id} tidak ditemukan.`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Terjadi kesalahan saat menghapus data Axon dengan id=${id}.`,
    });
  }
};
