const { normalizeMessages } = require('./../utils/normalizar');

const messages = [
    { 
      id: 0,
      author: {
        id: 'd86webs@gmail.com', 
        nombre: 'Diego', 
        apellido: 'Quintero', 
        edad: '35', 
        alias: 'Roman',
        avatar: 'url avatar (foto, logo) del usuario'
      }, 
      mensaje: "¡Hola! ¿Que tal?" },
    { 
      id: 1,
      author: {
        id: 'diegonquintero@hotmail.com', 
        nombre: 'Juan Roman', 
        apellido: 'Riquelme', 
        edad: '42', 
        alias: 'Torero',
        avatar: 'url avatar (foto, logo) del usuario'
      }, 
      mensaje: "¡Muy bien! ¿Y vos?" },
    { 
      id: 2,
      author: {
        id: 'dquintero@mgmsa.com.ar', 
        nombre: 'Diego Armando', 
        apellido: 'Maradona', 
        edad: '60', 
        alias: 'D10S',
        avatar: 'url avatar (foto, logo) del usuario'
      },
      mensaje: "¡Genial!" }
];

const Contenedor = require('../contenedorDB');
const { optionsSQLite } = require('./databases');

// const contenedorMensajes = new Contenedor(optionsSQLite,'tb_mensajes');
// console.log(optionsSQLite)

const getMessages = async () => {
  // const messages = await contenedorMensajes.getAll();
  console.log(normalizeMessages({ id: 'messages', messages }));
  return normalizeMessages({ id: 'messages', messages });
};

const saveMessage = async (message) => {
  // const idMessage = await contenedorMensajes.save(message);
  messages.push(message);
  return message.id;
}

module.exports = {
  getMessages,
  saveMessage
};