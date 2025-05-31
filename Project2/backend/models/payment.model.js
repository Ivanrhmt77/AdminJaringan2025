module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define(
    "payments",
    {
      customerNumber: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      checkNumber: {
        type: Sequelize.STRING(50),
        primaryKey: true,
      },
      paymentDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return Payment;
};
