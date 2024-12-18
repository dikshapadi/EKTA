const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const passport = require("passport");
const flash = require("connect-flash");
const RedisStore = require("connect-redis")(session);
const methodOverride = require("method-override");
const mapRoutes = require("./routes/map.js");
const culRoutes = require("./routes/culinary.js");
const danceRoutes = require("./routes/dance.js");
const musicRoutes = require("./routes/music.js");
const storyRoutes = require("./routes/story.js");
const gamesRoutes = require("./routes/games.js");
const gameRoutes = require("./routes/game.js");
const ecommRoutes = require("./routes/ecommerce.js");

app.set('view engine', 'ejs');
app.use(express.static(__dirname));
require("dotenv").config();
require("./config/dbConnection.js");
require("./config/passport.js")(passport);

app.use(express.json());
const redisClient = redis.createClient({
	host: process.env.REDIS_HOST,
	port: process.env.REDIS_PORT,
  });
  app.use(session({
	store: new RedisStore({ client: redisClient }),
	secret: "secret",
	resave: true,
	saveUninitialized: true,
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
app.use(gamesRoutes);
app.use(gameRoutes);
app.use(ecommRoutes);

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

// No need to call `app.listen()` here for Vercel
// Vercel automatically handles the serverless function

module.exports = app; // Export app for Vercel to use
