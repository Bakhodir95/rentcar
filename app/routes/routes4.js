module.exports = (app4) => {
  const order = require("../controllers/controllers4");
  var express = require("express");
  var router = express.Router();

  // Create a new order
  router.post("/", order.create);
  // Retrieve all order
  router.get("/", order.findAll);
  // Retrieve a single order with id
  router.get("/:id", order.findOne);
  // Update a order with id
  router.put("/:id", order.update);
  // Delete a order with id
  router.delete("/:id", order.delete);
  // Delete all order
  router.delete("/", order.deleteAll);
  app4.use("/api/order", router);
};
