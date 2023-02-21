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

app.get('/products', (req, res) => {
  const id = req.query.id
  res.send({id});
})

//Llamado a la clase ProductMnager
app.get('/', async (req,res)=> {
    const products = await productManager.getAll();
    res.send({products});
})

app.delete('/api/products/:id', (req,res)=>{
  const pid = Number(req.params.id)
  const index = products.findIndex (p => p.id === pid)
  
  if (index!= -1){
    products.splice(index, 1)
    res.send({status:'success', message: 'Deleted successfully'})
  } else {
    res.status(404).send({status:'error', message:'There has been an error'})
  }
})

app.listen(8080,()=>console.log("Listening on port 8080"))