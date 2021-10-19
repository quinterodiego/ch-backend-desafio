const express = require('express');
const server = express();

const productosRouter = require('./routers/productos');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/api/productos', productosRouter);

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('pages/index');
});

const PORT = 8080;
server.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));