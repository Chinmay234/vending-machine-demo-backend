var express = require('express');
var router = express.Router();

var users = require('../api/users');
// import auth from './auth'
var products = require('../api/products');
var orders = require('../api/orders');
var vending = require('../api/vending');


router.use('/users', users)
// router.use('/v1/auth', auth)
router.use('/products', products)
router.use('/orders', orders)
router.use('/vending', vending)
module.exports = router;
