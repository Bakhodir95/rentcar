const express = require("express");
const app = express();

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// routelarni serverga import qilish kk
require("./app/routes/routes")(app);
require("./app/routes/routes2")(app);
require("./app/routes/routes3")(app);
require("./app/routes/routes4")(app);

const db = require("./app/models");

db.sequelize
  //
  .sync({ force: true })
  .then(() => {
    console.log("Server is working well");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

const PORT = process.env.PORT || 7100;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
console.log("Thanks for all");
