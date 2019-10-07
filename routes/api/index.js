var express = require("express");
var router = express.Router();

var blogRouter = require('./blog');
var cafeRouter = require('./cafe');
var newsRouter = require('./news');

router.use('/blog', blogRouter);
router.use('/cafe', cafeRouter);

router.use('/news', newsRouter);
/* GET users listing. */
router.get("/", function(req, res, next) {
	res.send("This is api");
});

module.exports = router;
