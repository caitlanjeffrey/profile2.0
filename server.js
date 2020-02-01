
// *** Dependencies
// =============================================================
const dotenv = require("dotenv")
dotenv.config();
const path = require("path")
const express = require("express");
const exphbs = require("express-handlebars");
const sequelize = require("./config/config")

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Requiring our models for syncing
// var db = require("./models") 

// Serve static content for the app from the "public" directory in the application directory.
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static('public'));

// Routes
// =============================================================
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

var syncOptions = { force: false };

// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function () {
//     app.listen(PORT, function () {
//         console.log(
//             "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//             PORT,
//             PORT
//         );
//     });
// });

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

module.exports = app; 