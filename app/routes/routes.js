module.exports = (app) => {
  const brand = require("../controllers/controllers");
  var express = require("express");
  var router = express.Router();

  // Create a new brand
  router.post("/", brand.create);
  router.get("/", brand.findAll);
  router.get("/:id", brand.findOne);
  router.put("/:id", brand.update);
  router.delete("/:id", brand.delete);
  router.delete("/", brand.deleteAll);
  app.use("/api/brand", router);
};
