var express = require('express');
var router = express.Router();
var {getAllPoroducts, createProduct, getProduct, dispenceProduct} = require('./products-controller')

/* all product routes */
/* get all products */
router.get('/', getAllPoroducts);

router.get('/:id', getProduct);


/* create product */
router.post('/', createProduct);

/* update product details */
router.put('/', updateProduct);

/* dispence a single product */
router.put('/dispence', dispenceProduct);

module.exports = router;
