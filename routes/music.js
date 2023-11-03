const express = require("express");
const router = express.Router();

router.get("/music", (req,res) => {
	res.render("music");
});


module.exports = router;	