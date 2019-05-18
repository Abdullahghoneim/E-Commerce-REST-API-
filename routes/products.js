const express = require('express');

const productsController = require('../controllers/products.controller');

const router = express.Router();

router.post('/addProduct', productsController.postAddProduct);

router.get('/product/:id', productsController.getProduct);

router.get('/products', productsController.getAllProducts);

// GET BY CATEGORIE
router.get('/products/apparel', productsController.getClothes);

// GET BY CATEGORIE => beatuy
router.get('/products/beauty', productsController.getBeauty);

// GET BY CATEGORIE => electronic devices
router.get('/products/elecDevices', productsController.getElec);

// GET BY CATEGORIE => MOBO  devices
router.get('/products/mobo', productsController.getMobo);

// GET BY CATEGORIE => MOBO  devices
router.get('/products/shoes', productsController.getshoes);

// SEARCH FOR PRODUCTS
router.get('/products/search/:term', productsController.searchProducts);

module.exports = router;
