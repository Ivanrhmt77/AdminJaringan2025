const db = require("../models");
const Customer = db.customers;

// Create
exports.create = async (req, res) => {
  try {
    // Validate request
    if (!req.body.customerName) {
      res.status(400).json({
        message: "Customer name tidak boleh kosong!",
      });
      return;
    }

    // Create a Customer
    const customer = {
      customerNumber: req.body.customerNumber,
      customerName: req.body.customerName,
      contactLastName: req.body.contactLastName,
      contactFirstName: req.body.contactFirstName,
      phone: req.body.phone,
      addressLine1: req.body.addressLine1,
      addressLine2: req.body.addressLine2,
      city: req.body.city,
      state: req.body.state,
      postalCode: req.body.postalCode,
      country: req.body.country,
      salesRepEmployeeNumber: req.body.salesRepEmployeeNumber,
      creditLimit: req.body.creditLimit,
    };

    // Save Customer in the database
    const data = await Customer.create(customer);
    res.json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Terjadi kesalahan saat membuat customer.",
    });
  }
};

// Get All
exports.findAll = async (req, res) => {
  try {
    const customers = await Customer.findAll({
      include: [
        {
          model: db.employees,
          as: "employee",
          attributes: ["employeeNumber", "firstName", "lastName"],
        },
      ],
    });
    res.json(customers);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Terjadi kesalahan saat mengambil data customer.",
    });
  }
};

// Get One
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await Customer.findByPk(id, {
      include: [
        {
          model: db.employees,
          as: "employee",
          attributes: ["employeeNumber", "firstName", "lastName"],
        },
      ],
    });
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({
        message: `Customer dengan id=${id} tidak ditemukan.`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Terjadi kesalahan saat mengambil data customer dengan id=${id}.`,
    });
  }
};

// Update
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await Customer.update(req.body, {
      where: { customerNumber: id },
    });
    if (num[0] === 1) {
      res.json({
        message: "Customer berhasil diperbarui.",
      });
    } else {
      res.status(404).json({
        message: `Tidak dapat memperbarui Customer dengan id=${id}. Customer mungkin tidak ditemukan atau req.body kosong!`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Terjadi kesalahan saat memperbarui Customer dengan id=${id}.`,
    });
  }
};

// Delete
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await Customer.destroy({
      where: { customerNumber: id },
    });
    if (num === 1) {
      res.json({
        message: "Customer berhasil dihapus!",
      });
    } else {
      res.status(404).json({
        message: `Tidak dapat menghapus Customer dengan id=${id}. Customer mungkin tidak ditemukan!`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Tidak dapat menghapus Customer dengan id=${id}.`,
    });
  }
};
