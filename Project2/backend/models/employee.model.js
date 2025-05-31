module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define(
    "employees",
    {
      employeeNumber: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      lastName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      firstName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      extension: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      officeCode: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      reportsTo: {
        type: Sequelize.INTEGER,
      },
      jobTitle: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return Employee;
};
