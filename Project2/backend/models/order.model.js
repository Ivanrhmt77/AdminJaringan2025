module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define(
    "orders",
    {
      orderNumber: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      orderDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      requiredDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      shippedDate: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      comments: {
        type: Sequelize.TEXT,
      },
      customerNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return Order;
};
