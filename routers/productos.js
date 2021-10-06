const express = require('express');
const Contenedor = require('../contenedor');

const productosRouter = express.Router();

const productosContenedor = new Contenedor('./data/products.json');

productosRouter.get('/', async (req, res) => {
    const lista = await productosContenedor.getAll();
    res.send({ 
        message: 'success',
        data: lista
    });
});

productosRouter.get('/:id', async (req, res) => {
    const productoId = req.params.id;
    const producto = await productosContenedor.getById(productoId);
    console.log(producto);
    res.send({ 
        message: 'success',
        data: producto
    });
});

productosRouter.post('/', async (req, res) => {
    const newProduct = req.body;
    console.log({ newProduct });
    const productoSavedID = await productosContenedor.save(newProduct);
    res.send({ 
        message: 'success',
        data: { ...newProduct }
    });
});

productosRouter.put('/:id', async (req, res) => {
    const productoId = req.params.id
    const producto = req.body;
    const userUpdated = await productosContenedor.update(productoId, producto);

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

module.exports = productosRouter;