module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define(
    "customers",
    {
      customerNumber: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      customerName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      contactLastName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      contactFirstName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      addressLine1: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      addressLine2: {
        type: Sequelize.STRING(50),
      },
      city: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(50),
      },
      postalCode: {
        type: Sequelize.STRING(15),
      },
      country: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      salesRepEmployeeNumber: {
        type: Sequelize.INTEGER,
      },
      creditLimit: {
        type: Sequelize.DECIMAL(10, 2),
      },
    },
    {
      timestamps: false,
    }
  );

  return Customer;
};
