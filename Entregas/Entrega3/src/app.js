import express from 'express';
import ProductManager from './ProductManager.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

//Acá se crea la instancia de la clase
const productManager = new ProductManager(path.join(dirname, 'productos.json'));

app.use(express.urlencoded({extended: true}));

app.get('/products', async (req, res) => {
    const products = await productManager.getAll();
    res.send({products});
})

app.get('/products/id', async (req, res) => {
  await productManager.getById(req.params.id);
  res.send({id});
})

//Llamado a la clase ProductMnager
app.get('/', async (req,res)=> {
    const products = await productManager.getAll();
    res.send({products});
})

app.delete('/api/products/:id', async (req,res)=>{
  await productManager.deleteById(req.params.id);

  res.send({status: 'Producto eliminado'})
})

app.listen(8080,()=>console.log("Listening on port 8080"))