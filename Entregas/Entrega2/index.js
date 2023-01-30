import ManagerProductos from "./manager/ProductManager.js"

const manager = new ManagerProductos()

const managerProductos = async()=> {
    let productos = await manager.consultarProductos()
    console.log(productos)

    const producto = {
        nombre: 'IPad',
        descripcion: 'IPad 9na generacion de 256gb',
        precio: 9800,
        stock: 20
    }

    await manager.addProduct(producto)
    productos = await manager.consultarProductos();
    console.log(productos)
}

managerProductos();