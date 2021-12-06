const { Schema } = require('mongoose');
const MongoContainer = require("../../Containers/Mongo");

class ProductDaoMongoDB extends MongoContainer {
    constructor() {
        super('products', new Schema ({
            nombre: { type: String, required: true },
            descripcion: { type: String, required: true },
            codigo: { type: String, required: true },
            url: { type: String, required: true },
            price: { type: Number, required: true },
            stock: { type: Number, required: true },
            timestamp: { type: Date, required: true }
        }));
    }
};

module.exports = ProductDaoMongoDB;