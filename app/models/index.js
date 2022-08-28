const config = require("../config/config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.db, config.user, config.password, {
  host: config.host,
  dialect: config.dialects,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  define: {
    timestamps: false,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Brand = require("./models.js")(sequelize, Sequelize);
db.Category = require("./models2")(sequelize, Sequelize);
db.Car = require("./models3")(sequelize, Sequelize);
db.Order = require("./models4")(sequelize, Sequelize);

db.Brand.hasMany(db.Car);
db.Car.belongsTo(db.Brand, { onDelete: "cascade" });
db.Category.hasMany(db.Car);
db.Car.belongsTo(db.Category, { onDelete: "cascade" });
db.Car.hasMany(db.Order);
db.Order.belongsTo(db.Car, { onDelete: "cascade" });

module.exports = db;
