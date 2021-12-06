
const mongoose = require('mongoose');
const options = require('./../config');

class MongoContainer {
    constructor(collection, schema) {
        this.collection = mongoose.model(collection, schema);
        this.init();
    }

    async init() {
        if(!this.conexion) {
            console.log('HAY CONEXION!!!')
            this.conexion = await mongoose.connect(options.mongodb.host, options.mongodb.options);
        }
    }

    async create(producto) {
        try {
            const document = await this.collection.create(producto);
            console.log('Save:', {document});
            return document._id;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getById(id) {
        try {
            const documents = await this.collection.find({_id: id});
            console.log('getById:', documents);
            if(documents.length === 0){
                return null;
            } else {
                return documents[0];
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async getAll() {
        try {
            const documents = await this.collection.find({});
            console.log({ documents })
            return documents;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async deleteById(id) {
        try {
            const response = await this.collection.deleteOne({_id: id});
            console.log('deleteOne:', response);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async deleteAll() {
        try {
            await this.collection.deleteMany({});
            console.log('deletaAll');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async update(id, element) {
        const { n, nModified } = await this.collection.updateOne({ _id: id }, { $set: element });
        if (n == 0 || nModified == 0) {
            console.error(`Elemento con id: '${id}' no fue encontrado`);
            return null;
        }

        const elementUpdated = await this.getById(id);
        return elementUpdated;
    }
}

module.exports = MongoContainer;