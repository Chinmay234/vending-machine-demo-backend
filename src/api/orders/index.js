var express = require('express');
var router = express.Router();

/* all product routes */

router.get('/', function(req, res, next) {
  res.send('products');
});

module.exports = router;
