const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const mapRoutes = require("./routes/map.js");
const culRoutes = require("./routes/culinary.js")
const danceRoutes = require("./routes/dance.js")
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
require("./config/dbConnection.js");

// Routes
app.use(mapRoutes);
app.use(culRoutes);
app.use(danceRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
