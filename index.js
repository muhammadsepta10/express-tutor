const express = require("express");
const bodyParser = require("body-parser");
require("express-group-routes");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "*");
  res.header("Access-Control-Allow-Method", "*");
  next();
});

//controllers
const TodosController = require("./controllers/categories");

app.group("/api/v1", router => {
  //todos API
  router.get("/categories", TodosController.index);
  //another APIs goes here
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
