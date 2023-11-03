const express = require("express");
const router = express.Router();

router.get("/story", (req,res) => {
	res.render("story");
});

router.get("/monuments",(req,res)=>{
	res.render("monuments")
})


module.exports = router;	