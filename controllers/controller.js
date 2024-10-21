const userController = require('./user/controller.js');
const productController = require('./product/controller.js');

const Controller = {

    userController: userController,

    productController: productController,

    homepage: async (req, res) => {
        req.from_main_controller = true;
        const products = await productController.getProducts(req, res);
        return res.json({
            message: 'Got products for homepage',
            products
        })
    }
}

module.exports = Controller;