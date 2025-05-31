const db = require("../models");
const OrderDetail = db.orderDetails;

// Get All
exports.findAll = async (req, res) => {
  try {
    const orderDetails = await OrderDetail.findAll({
      include: [
        {
          model: db.orders,
          attributes: ["orderNumber", "orderDate", "status"],
        },
        {
          model: db.products,
          attributes: ["productCode", "productName", "productLine"],
        },
      ],
    });
    res.json(orderDetails);
  } catch (err) {
    res.status(500).json({
      message:
        err.message || "Terjadi kesalahan saat mengambil data order detail.",
    });
  }
};

// Get One
exports.findOne = async (req, res) => {
  const { orderId, productCode } = req.params;
  try {
    const orderDetail = await OrderDetail.findOne({
      where: {
        orderNumber: orderId,
        productCode: productCode,
      },
      include: [
        {
          model: db.orders,
          attributes: ["orderNumber", "orderDate", "status"],
        },
        {
          model: db.products,
          attributes: ["productCode", "productName", "productLine"],
        },
      ],
    });
    if (orderDetail) {
      res.json(orderDetail);
    } else {
      res.status(404).json({
        message: `Order detail dengan orderNumber=${orderId} dan productCode=${productCode} tidak ditemukan.`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Terjadi kesalahan saat mengambil data order detail dengan orderNumber=${orderId} dan productCode=${productCode}.`,
    });
  }
};
