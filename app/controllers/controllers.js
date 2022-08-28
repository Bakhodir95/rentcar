const db = require("../models/index");
const Brand = db.Brand;

// Create and Save a new Brand
exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }

  // Create  a Brand
  const brand = {
    name: req.body.name,
    image: req.body.image,
  };

  // Save Brand in the database
  Brand.create(brand)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating brands",
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.body.name;
  Brand.findAll({ where: name })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving brands.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Brand.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Brand with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Brand with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Brand.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Brand was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Brand with id=${id}. Maybe Brand was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Brand with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Brand.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Brand was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Brand with id=${id}. Maybe Brand was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Brand with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Brand.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Brands were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all brands.",
      });
    });
};
