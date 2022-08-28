const db = require("../models/index");
const Order = db.Order;

// Create and Save a new Order
exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }

  // Create  a Order
  const order = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    city: req.body.city,
    driver: req.body.driver,
    armchair_kids: req.body.armchair_kids,
    from_time: req.body.from_time ? req.body.from_time : false,
    to_time: req.body.to_time,
    answered: req.body.answered ? req.body.answered : false,
    price: req.body.price,
    car: req.body.car,
  };

  // Save Order in the database
  Order.create(order)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating Order",
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.body.name;
  Order.findAll({ where: name })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Order.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Order.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Order with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Order with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Order.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Order was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Order with id=${id}. Maybe Order was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Order with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Order.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Order was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Order with id=${id}. Maybe Order was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Order with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Order.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Orders were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Orders.",
      });
    });
};
