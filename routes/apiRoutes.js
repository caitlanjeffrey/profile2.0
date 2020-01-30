
// Requiring our models
// var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the Burgers
    app.get("/api/burger", function (req, res) {
        var query = {};
        if (req.query.burger_name) {
            query.AuthorId = req.query.burger_name;
        }
        db.Burger.findAll({
            where: query
        }).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

    // Get route for retrieving a single Burger
    app.get("/api/burger/:id", function (req, res) {
        db.Burger.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbBurger) {
            console.log(dbBurger);
            res.json(dbBurger);
        });
    });

    // Burger route for saving a new Burger
    app.post("/api/burger", function (req, res) {
        db.Burger.create(req.body).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

    // DELETE route for deleting Burgers
    app.delete("/api/burger/:id", function (req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

    // PUT route for updating Burgers
    app.put("/api/burger", function (req, res) {
        db.Burger.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbBurger) {
                res.json(dbBurger);
            });
    });
};
