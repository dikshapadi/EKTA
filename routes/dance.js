const express = require("express");
const router = express.Router();

router.get("/dance", (req,res) => {
	res.render("dance");
});




module.exports = router;	