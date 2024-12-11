const express = require('express');
const router = express.Router();
const { getProducts, getProductById } = require('../controllers/productController');

// Route untuk mendapatkan semua produk
router.get('/', getProducts);

// Route untuk mendapatkan produk berdasarkan ID
router.get('/:id', getProductById);

module.exports = router;
