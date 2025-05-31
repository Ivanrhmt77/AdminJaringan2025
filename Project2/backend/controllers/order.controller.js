const db = require("../models");
const Order = db.orders;

// Get All
exports.findAll = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: db.customers,
          attributes: ["customerNumber", "customerName"],
        },
        {
          model: db.orderDetails,
          include: [
            {
              model: db.products,
              attributes: ["productCode", "productName", "productLine"],
            },
          ],
        },
      ],
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Terjadi kesalahan saat mengambil data order.",
    });
  }
};

// Get One
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const order = await Order.findByPk(id, {
      include: [
        {
          model: db.customers,
          attributes: ["customerNumber", "customerName"],
        },
        {
          model: db.orderDetails,
          include: [
            {
              model: db.products,
              attributes: ["productCode", "productName", "productLine"],
            },
          ],
        },
      ],
    });
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({
        message: `Order dengan id=${id} tidak ditemukan.`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Terjadi kesalahan saat mengambil data order dengan id=${id}.`,
    });
  }
};
