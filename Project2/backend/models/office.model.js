module.exports = (sequelize, Sequelize) => {
  const Office = sequelize.define(
    "offices",
    {
      officeCode: {
        type: Sequelize.STRING(10),
        primaryKey: true,
      },
      city: {
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
      state: {
        type: Sequelize.STRING(50),
      },
      country: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      postalCode: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      territory: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return Office;
};
