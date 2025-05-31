const db = require("../models");
const Payment = db.payments;

// Get All
exports.findAll = async (req, res) => {
  try {
    const payments = await Payment.findAll({
      include: [
        {
          model: db.customers,
          attributes: ["customerNumber", "customerName"],
        },
      ],
    });
    res.json(payments);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Terjadi kesalahan saat mengambil data payment.",
    });
  }
};

// Get One
exports.findOne = async (req, res) => {
  const { customerNumber, checkNumber } = req.params;
  try {
    const payment = await Payment.findOne({
      where: {
        customerNumber: customerNumber,
        checkNumber: checkNumber,
      },
      include: [
        {
          model: db.customers,
          attributes: ["customerNumber", "customerName"],
        },
      ],
    });
    if (payment) {
      res.json(payment);
    } else {
      res.status(404).json({
        message: `Payment dengan customerNumber=${customerNumber} dan checkNumber=${checkNumber} tidak ditemukan.`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Terjadi kesalahan saat mengambil data payment dengan customerNumber=${customerNumber} dan checkNumber=${checkNumber}.`,
    });
  }
};
