const express = require("express");
const router = express.Router();

router.get("/story", (req,res) => {
	res.render("story");
});




module.exports = router;	