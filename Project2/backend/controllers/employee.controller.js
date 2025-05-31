const db = require("../models");
const Employee = db.employees;

// Get All
exports.findAll = async (req, res) => {
  try {
    const employees = await Employee.findAll({
      include: [
        {
          model: db.offices,
          attributes: ["officeCode", "city", "country"],
        },
        {
          model: db.employees,
          as: "supervisor",
          attributes: ["employeeNumber", "firstName", "lastName"],
        },
      ],
    });
    res.json(employees);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Terjadi kesalahan saat mengambil data employee.",
    });
  }
};

// Get One
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await Employee.findByPk(id, {
      include: [
        {
          model: db.offices,
          attributes: ["officeCode", "city", "country"],
        },
        {
          model: db.employees,
          as: "supervisor",
          attributes: ["employeeNumber", "firstName", "lastName"],
        },
      ],
    });
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({
        message: `Employee dengan id=${id} tidak ditemukan.`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Terjadi kesalahan saat mengambil data employee dengan id=${id}.`,
    });
  }
};
