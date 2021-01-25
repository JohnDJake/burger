// Import express and create a router
const router = require("express").Router();

// Import burgers model
const burgers = require("../models/burgers");

// Create routes
router.get("/", (req, res) => burgers.selectAll(burgers => res.render("index", { burgers })));

router.post("/api/burgers", (req, res) => burgers.insertOne(req.body, ({ insertId: id }) => res.json(id)));

router.put("/api/burgers/:id", (req, res) => burgers.updateOne({ ...req.body, devoured: req.body.devoured === "true" }, req.params, ({ changedRows }) => {
    if (changedRows == 0) res.sendStatus(404);
    else res.sendStatus(200);
}));

module.exports = router;