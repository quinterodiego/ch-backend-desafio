const Contenedor = require('./contenedor');

const miContenedor = new Contenedor('products.json');

const miProducto = {
    nombre: 'Producto1',
    precio: 1000
}

const MostrarIDProducto = async () => {
    const productoId = await miContenedor.save(miProducto);

    console.log("El ID del producto es: ", productoId); 
}

const BuscarPorId = async (id) => {
    await miContenedor.getById(id);
}

const ListarProductos = async () => {
    const productos = await miContenedor.getAll();
    console.log("Lista de todos los productos: \n", productos);
}


const EliminarPorId = async (id) => {
    await miContenedor.deleteById(id);
}

const EliminarTodosLosProductos = async () => {
    await miContenedor.deleteAll();
}

// MostrarIDProducto();
// BuscarPorId(3);
// ListarProductos();
// EliminarPorId(2);
// EliminarTodosLosProductos();