const express = require("express");
const router = express.Router();

router.get("/dance", (req,res) => {
	res.render("dancemain");
});

router.get("/danceexp", (req,res) => {
	res.render("danceexp");
});

module.exports = router;	