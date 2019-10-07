var express = require("express");
var router = express.Router();

var likeRouter = require('./like');
router.use('/like', likeRouter);
/* GET users listing. */
router.get("/", function(req, res, next) {
	res.send("This is news");
});

module.exports = router;
