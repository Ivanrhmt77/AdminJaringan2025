const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  dialectOptions: dbConfig.dialectOptions,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.customers = require("./customer.model.js")(sequelize, Sequelize);
db.employees = require("./employee.model.js")(sequelize, Sequelize);
db.offices = require("./office.model.js")(sequelize, Sequelize);
db.orders = require("./order.model.js")(sequelize, Sequelize);
db.orderDetails = require("./orderDetail.model.js")(sequelize, Sequelize);
db.payments = require("./payment.model.js")(sequelize, Sequelize);

// Relationships
db.customers.belongsTo(db.employees, {
  foreignKey: "salesRepEmployeeNumber",
  as: "employee",
});

db.employees.hasMany(db.customers, {
  foreignKey: "salesRepEmployeeNumber",
});

db.employees.belongsTo(db.offices, {
  foreignKey: "officeCode",
});

db.offices.hasMany(db.employees, {
  foreignKey: "officeCode",
});

db.orders.belongsTo(db.customers, {
  foreignKey: "customerNumber",
});

db.customers.hasMany(db.orders, {
  foreignKey: "customerNumber",
});

db.orderDetails.belongsTo(db.orders, {
  foreignKey: "orderNumber",
});

db.orders.hasMany(db.orderDetails, {
  foreignKey: "orderNumber",
});

db.payments.belongsTo(db.customers, {
  foreignKey: "customerNumber",
});

db.customers.hasMany(db.payments, {
  foreignKey: "customerNumber",
});

module.exports = db;
