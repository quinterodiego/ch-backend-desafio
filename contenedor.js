const fs = require('fs');

class Contenedor {
    constructor(file) {
        this.file = file;
    }

    async save(producto) {

        try{
            const data = await fs.promises.readFile(`./${this.file}`, 'utf-8');

            let listaProductos = [];
    
            if(data === ''){
                producto.id = 1;
                listaProductos.push(producto);
            }else{       
                const productos = JSON.parse(data);
                producto.id = productos[productos.length - 1].id + 1;
                productos.push(producto);
                listaProductos = productos;
            }
    
            const productoString  = JSON.stringify(listaProductos, null, 2);
            await fs.promises.writeFile(`./${this.file}`, productoString, 'utf-8');

            return producto.id;
        }
        catch(error) {
            console.error('Error: ', error);
        }

    }

    async getById(id) {
        try {
            const data = await fs.promises.readFile(`./${this.file}`, 'utf-8');
            const productos = JSON.parse(data);
            const productoEncontrado = productos.find(producto => producto.id === id);
            console.log(productoEncontrado);
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    async getAll() {
        try{
            const data = await fs.promises.readFile(`./${this.file}`, 'utf-8');
            const productos = JSON.parse(data);
            return productos;
        }
        catch(error) {
            console.error('Error: ', error);
        }
    }

    async deleteById(id) {
        try {
            const data = await fs.promises.readFile(`./${this.file}`, 'utf-8');
            const productos = JSON.parse(data);
            const nuevosProductos = productos.filter(producto => producto.id !== id);
            console.log(nuevosProductos);
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    async deleteAll() {
        try{
            await fs.promises.writeFile(`./${this.file}`, '', 'utf-8');
        }
        catch(error) {
            console.error('Error: ', error);
        }
    }
}

module.exports = Contenedor;