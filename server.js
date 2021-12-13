require('dotenv').config();
const express = require('express');
const server = express();
const { createServer } = require('http');
const { Server } = require('socket.io');
const faker = require('faker');

const productosRouter = require('./routers/productos');
const cargaRouter = require('./routers/charge');
const cartRouter = require('./routers/cart');

const { getMessages, saveMessage } = require('./models/chats');

const httpServer = createServer(server);
const io = new Server(httpServer);

server.use( express.static('public') );

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/carga', cargaRouter);
server.use('/productos', productosRouter);
server.use('/carrito', cartRouter);

server.set('view engine', 'ejs');

const admin = require("firebase-admin");

const options = require("./config");
const serviceAccount = options.firestore;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const PORT = 3000;

io.on('connection', async socket => {
  console.log(`¡Nuevo cliente conectado! socketid: ${socket.id}`);
  // const products = await productosContenedor.getAll();
  // io.sockets.emit('products', products);

  // socket.on('new-product', async product => {
  //   await productosContenedor.save(product);
  //   products = await productosContenedor.getAll();
  //   console.log('PRODUCTOS', products)
  //   io.sockets.emit('products', products);
  // });

  const messages = await getMessages();
  console.log('Mensajes:', { messages })
  socket.emit('messages', messages);

  socket.on('new-message', async message => {
    await saveMessage(message);
    const messages = await getMessages();
    io.sockets.emit('messages', messages);
  });
});

server.get('/', (req, res) => {
  res.render('pages/index');
});

server.get('/carga', (req, res) => {
  res.render('pages/carga');
});

server.get('/productos', (req, res) => {
  res.render('pages/productos');
});


server.get('/carrito', (req, res) => {
  res.render('pages/carrito');
});

server.get('/api/products-test', (req, res) => {
  const products = [...new Array(5)].map((_, index) => ({
    id: index,
    title: faker.commerce.product(),
    price: faker.commerce.price(),
    thumbnail: faker.image.imageUrl(),
  }));
  res.json(products);
})

const http = httpServer.listen(PORT, () => 
    console.log(`Servidor abierto en http://localhost:${PORT}/`)
)

http.on('error', error => console.log('Error en servidor:', error));
