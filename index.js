const express = require('express');

const Contenedor = require('./contenedor');

const server = express();

const miContenedor = new Contenedor('products.json');

const PORT = 8080;
const PATH = '/';

const callback = (req, res, next) => {
    res.send({ message: 'HOME' });
}

const productoRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// HOME
server.get(PATH, callback);

// Muestro todos los productos
server.get('/products', async (req, res) => {
    const data = await miContenedor.getAll();
    res.json(data);
})

// Producto Random
server.get('/productsRandom', async (req, res) => {
    const id = productoRandom(1, 3)
    const data = await miContenedor.getAll();
    res.json(data[id - 1]);
})

const callbackInit = () => {
    console.log(`Server corriendo en el puerto: ${PORT}`);
}

server.listen(PORT, callbackInit);

server.on('error', (error) => console.log('Error --> ', error));