const products = require('../data/products.json');

// Handler untuk mendapatkan semua produk skincare
exports.getProducts = (req, res) => {
    res.status(200).json({
        success: true,
        data: products,
    });
};

// Handler untuk mendapatkan produk berdasarkan ID
exports.getProductById = (req, res) => {
    const id = parseInt(req.params.id, 10); // Ambil ID dari parameter URL dan konversi ke integer
    const product = products.find((item) => item.id === id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: `Product with ID ${id} not found.`,
        });
    }

    res.status(200).json({
        success: true,
        data: product,
    });
};