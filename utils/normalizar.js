const {normalize}  = require('normalizr');
const {schema} = require('normalizr');

const schemaAuthor = new schema.Entity('author', {}, { idAttribute: 'email' });  

const schemaMessage = new schema.Entity('message', { author: schemaAuthor }, { idAttribute: 'id' });

const schemaMessages = new schema.Entity('messages', { messages: [schemaMessage] }, { idAttribute: 'id' });

const normalizeMessages = (messages) => normalize({ id: 'mensajes', mensajes: messages }, schemaMessages);

module.exports = { normalizeMessages };