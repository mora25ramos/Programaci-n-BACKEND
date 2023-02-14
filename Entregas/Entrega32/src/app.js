const express = require('express');
const app = express();

const products = [
    {
        id: 1,
        name: 'Banana',
        detail: 'Banana ecuatoriana',
        price: 55
    },
    {
        id: 2,
        name: 'Shampoo',
        detail: 'Shampoo Pantene 2en1',
        price: 450
    },
    {
        id: 3,
        name: 'Pan Lactal',
        detail: 'Bimbo pan artesano',
        price: 670
    }
]

app.get('/api/products', (req,res)=>{
    res.send(products)
})

app.listen(8080,()=>console.log('Listening on port 8080'))