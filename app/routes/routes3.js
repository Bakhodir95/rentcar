module.exports = (app3) => {
  const car = require("../controllers/controllers3");
  var express = require("express");
  var router = express.Router();

  // Create a new car
  router.post("/", car.create);
  // Retrieve all car
  router.get("/", car.findAll);
  // Retrieve a single car with id
  router.get("/:id", car.findOne);
  // Update a car with id
  router.put("/:id", car.update);
  // Delete a car with id
  router.delete("/:id", car.delete);
  // Delete all car
  router.delete("/", car.deleteAll);
  app3.use("/api/car", router);
};
