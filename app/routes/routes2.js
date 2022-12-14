module.exports = (app2) => {
  const category = require("../controllers/controllers2");
  var express = require("express");
  var router = express.Router();

  // Create a new category
  router.post("/", category.create);
  // Retrieve all category
  router.get("/", category.findAll);
  // Retrieve a single category with id
  router.get("/:id", category.findOne);
  // Update a category with id
  router.put("/:id", category.update);
  // Delete a category with id
  router.delete("/:id", category.delete);
  // Delete all category
  router.delete("/", category.deleteAll);
  app2.use("/api/category", router);
};
