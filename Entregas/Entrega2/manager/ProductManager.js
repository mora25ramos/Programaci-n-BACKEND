import fs from 'fs'

const path = './files/Productos.json'

export default class ManagerProductos{
    consultarProductos = async() => {
        try {
            if (fs.existsSync(path)) {
                const data = await fs.promises.readFile (path, 'utf-8')
                console.log(data)
                const users = JSON.parse (data)
                return users;
            } else{
                return [];
            }
        }
        catch (error) {
            console.log (error)
        }
    } 

    addProduct = async(producto) =>{
        const productos = await this.consultarProductos();
        if (productos.length===0){
            producto.id = 1
        } else {
            producto.id = productos[productos.length -1].id + 1;
       }

       productos.push(producto)

       await fs.promises.writeFile (path, JSON.stringify(productos, null, '\t'));
       return producto;
    }

    consultarId = async ()=>{
        try {
            const idProducto = await document.getElementById(producto.id)
            console.log(`El ID del producto es: $ {consultarId}`)
        }
        catch (error) {
            console.log(error)
        }
    }
}