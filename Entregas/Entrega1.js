class ProductManager {

    constructor () {
      this.productos = [ ];
    }
  
    getProductos = () => {
      return this.productos
    }
  
    agregarProducto = (nombre, descripcion, precio, stock, id) => {
      const producto = {
        nombre, 
        descripcion, 
        precio,
        stock,
        id: [ ]
      }
  
      if (this.productos.length === 0){
        producto.id = 1
      } else {
        producto.id = this.productos [this.productos.length       -1].id+1
      }
  
      this.productos.push (producto)
    }
  
    registrarProducto = (idProducto)=>{
      const productoIndex = this.productos.findIndex (e=>e.id===idProducto)
      if (productoIndex===-1){
        console.log ('Producto no encontrado')
        return;
      }
  
      const productoRegistrado = this.productos [productoIndex].id.includes (idProducto)
      if (productoRegistrado) {
        console.log ('Producto registrado')
      }
      this.productos [productoIndex].id.push(idProducto)
    } 
  }
  
  const manejadorProductos = new ProductManager ();
  manejadorProductos.agregarProducto ('Cartera', 'Cartera de playa', 8700, 9);
  console.log (manejadorProductos.getProductos())