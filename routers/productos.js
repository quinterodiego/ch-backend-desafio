const express = require('express');
const isAdmin = require('./../middlewares/isAdmin');
const { getProducts, getProductById, updateProductById, deleteProductById } = require('../models/productos');
const { ProductDao } = require('../daos');

const productosRouter = express.Router();
const productDao = new ProductDao();

productosRouter.get('/', async (req, res) => {
    //const lista = await getProducts();
    const lista = await productDao.getAll();
    console.log({lista})
    res.render('pages/productos', {
        lista
    });
});

productosRouter.get('/:id', async (req, res) => {
    const productoId = req.params.id;
    //const producto = await getProductById(productoId);
    const producto = await productDao.getById(productoId);
    res.send({ 
        message: 'success',
        data: producto
    }); 
});

productosRouter.post('/', isAdmin, async(req, res) => {
    const nuevoProducto = req.body;
    //const idProductSaved = await createProduct(nuevoProducto);
    const idProductSaved = await productDao.create(nuevoProducto);
    res.send({ data: idProductSaved });
})

productosRouter.put('/:id', isAdmin, async (req, res) => {
    const productoId = req.params.id
    const producto = req.body;
    const productoUpdated = await updateProductById(productoId, producto);

    if (!productoUpdated) {
        res.send({
            message: 'Operation wrongt',
            data: productoUpdated
        })
    } else {
        res.send({
            message: 'Operation successfull',
            data: productoUpdated
        })
    }

    res.send({
        message: "operation successfull",
        data: productoUpdated
    })
});

productosRouter.delete('/:id', isAdmin, async (req, res) => {
    const productoId = req.params.id;
    const newProducts = await deleteProductById(productoId);

    if (!newProducts) {
        res.send({
            message: 'Operation wrongt',
            data: newProducts
        })
    } else {
        res.send({
            message: 'Operation successfull',
            data: newProducts
        })
    }

    res.send({
        message: "operation successfull",
        data: newProducts
    })
});

module.exports = productosRouter;