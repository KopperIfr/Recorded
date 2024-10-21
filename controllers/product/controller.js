const Products = ['Apple', 'Orange'];

const Controller = {
    getProducts: async (req, res) => {
        if(req.from_main_controller) {
            return Products;
        }
        return res.json({
            products: Products
        })
    }
}

module.exports = Controller;