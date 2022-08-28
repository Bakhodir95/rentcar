module.exports = (sequelize, Sequelize) => {
  const Car = sequelize.define("car", {
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
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    doors: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    seats: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    buggage: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    transmission: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    conditioner: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    fuel: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    insurance: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  return Car;
};
