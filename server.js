// Import express
const express = require("express");

// Get my port number
const PORT = process.env.PORT || 8080;

// Initialize the app
const app = express();

// Serve static content
app.use(express.static("public"));

// Parse requests/responses as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import handlebars and set it up as the view engine
app.engine("handlebars", require("express-handlebars")({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and tell the app to use them
app.use(require("./controllers/burgers_controller"));

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
