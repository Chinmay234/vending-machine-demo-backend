var express = require('express');
var router = express.Router();
var {getAllPoroducts} = require('./products-controller')

/* all product routes */

router.get('/', function(req, res, next) {
  const products = getAllPoroducts();
  res.send(products);
});
router.post('/', function(req, res, next) {
  res.send('products');
});

module.exports = router;
