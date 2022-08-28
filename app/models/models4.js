module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    armchair_kids: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    from_time: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    to_time: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    answered: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  });

  return Order;
};
