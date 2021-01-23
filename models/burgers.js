// Import my orm
const orm = require("../config/orm");

const burgers = {
    // Get everything from the burgers table
    selectAll(callback) { orm.selectAll("burgers", callback); },
    // Insert one burger into the table
    insertOne(objColsVals, callback) { orm.insertOne("burgers", objColsVals, callback); },
    // Update one burger
    updateOne(objColsVals, condition, callback) { orm.updateOne("burgers", objColsVals, condition, callback); }
}

module.exports = burgers;