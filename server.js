const express = require('express');
const productosRouter = require('./routers/productos');

const server = express();

const PORT = 8080;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(express.static('public'));

server.use('/api/productos', productosRouter);

server.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}`));

server.on('error', (error) => console.log('Error --> ', error));