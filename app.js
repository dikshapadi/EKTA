const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const mapRoutes = require("./routes/map.js");
const culRoutes = require("./routes/culinary.js")
const danceRoutes = require("./routes/dance.js")
const musicRoutes = require("./routes/music.js")
const storyRoutes = require("./routes/story.js")
const gamesRoutes = require("./routes/games.js")

require("dotenv").config();
require("./config/dbConnection.js")();
require("./config/passport.js")(passport);

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use("/assets", express.static(__dirname + "/assets"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
	secret: "secret",
	resave: true,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(methodOverride("_method"));
app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	res.locals.warning = req.flash("warning");
	next();
});

// Routes
app.use(mapRoutes);
app.use(culRoutes);
app.use(danceRoutes);
app.use(musicRoutes);
app.use(storyRoutes);
app.use(gamesRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
