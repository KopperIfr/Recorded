const express = require('express');
const { Router } = express;

const userRouter = require('./users/router.js');
const productRouter = require('./users/router.js');
const controller = require('../controllers/controller.js');
const middleware = require('../utils/middleware.js');

const router = Router();

router.use(middleware.isAuth);
router.use('/users', userRouter);
router.use('/products', productRouter);

router.get('/homepage', controller.homepage);

module.exports = router;