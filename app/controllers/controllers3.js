const db = require("../models/index");
const Car = db.Car;

// Create and Save a new Car
exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }

  // Create  a Car
  const car = {
    name: req.body.name,
    image: req.body.image,
    doors: req.body.doors,
    seats: req.body.seats,
    buggage: req.body.buggage,
    transmission: req.body.transmission,
    conditioner: req.body.conditioner ? req.body.conditioner : false,
    fuel: req.body.fuel,
    insurance: req.body.insurance,
    price: req.body.price,
    brandId: req.body.brandId,
    categoryId: req.body.categoryId,
  };

  // Save Car in the database
  Car.create(car)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating Car",
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.body.name;
  Car.findAll({ where: name })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Car.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Car.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Car with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Car with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Car.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Car was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Car with id=${id}. Maybe Car was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Car with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Car.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Car was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Car with id=${id}. Maybe Car was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Car with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Car.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Cars were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all Cars.",
      });
    });
};
