module.exports = (sequelize, Sequelize) => {
  const OrderDetail = sequelize.define(
    "orderdetails",
    {
      orderNumber: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      productCode: {
        type: Sequelize.STRING(15),
        primaryKey: true,
      },
      quantityOrdered: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      priceEach: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      orderLineNumber: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return OrderDetail;
};
