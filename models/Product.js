const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema('Product', {
    
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;