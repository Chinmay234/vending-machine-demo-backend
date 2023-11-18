var express = require('express');
var router = express.Router();
var {getAllPoroducts} = require('./products-controller')

/* all product routes */

router.get('/', getAllPoroducts);
router.post('/', function(req, res, next) {
  res.send('products');
});

module.exports = router;
