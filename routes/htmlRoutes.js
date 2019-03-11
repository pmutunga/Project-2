var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.customer.findAll({}).then(function(customerData) {
      // console.log(customerData.dataValues);
      res.render("customerdatabase", {
        msg: "Customer Database",
        customer: customerData
      });
    });
  });
  //Load the home page - Sasan
  app.get("/homepage", function(req, res) {
    res.render("homepage");
  });

  // Load cars page - Paskwa's changes
  app.get("/cars", function(req, res) {
    db.Car.findAll({}).then(function(dbCars) {
      res.render("cars", {
        msg: "Welcome!",
        cars: dbCars
      });
    });
  });

  // Load customer page and pass in an customer by id
  app.get("/customer/:id", function(req, res) {
    db.customer
      .findOne({ where: { id: req.params.id } })
      .then(function(customerData) {
        // console.log(customerData);
        res.render("customer", {
          customerID: customerData.dataValues.id,
          customerName: customerData.dataValues.customerName
        });
      });
  });

  // Load customer edit page
  app.get("/customer/:id/customerupdate", function(req, res) {
    db.customer
      .findAll({ where: { id: req.params.id } })
      .then(function(customerData) {
        // console.log(customerData[0].dataValues);
        res.render("customerupdate", {
          customerID: customerData[0].dataValues.id,
          customerName: customerData[0].dataValues.customerName
        });
      });
  });

  // Load car page and pass in a car by id - Paskwa's changes
  app.get("/car/:id", function(req, res) {
    db.Car.findOne({ where: { id: req.params.id } }).then(function(dbCar) {
      res.render("carpage", {
        car: dbCar
<<<<<<< HEAD
=======
      });
    });
  });

    // Load car page and pass in a car by id - Paskwa's changes
    app.get("/car/:id/update", function(req, res) {
      db.Car.findOne({ where: { id: req.params.id } }).then(function(dbCar) {
        res.render("updatecar", {
          car: dbCar
        });
>>>>>>> 12b36c88d6405d25515907e432cf1efce148f966
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
