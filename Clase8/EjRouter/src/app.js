import express, { urlencoded } from 'express';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import {_dirname} from './utils.js';

const app = express();

//Ejemplo Middleware a nivel de aplicacion
app.use((req, res, next) => { 
    console.log('Time :', Date.now()); 
    next() 
});

//Ejemplo Middleware a nivel de endpoint
function middleware1 (req, res, next) { 
    req.dato1 = 'un dato'; 
    next()
};

app.use(express.json)
app.use(express.urlencoded({extended:true}))

app.use('/static', express.static('./pubic'))

app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)


//Sigue el ejemplo de Middleware a nivel de endpoint
app.get ('./test', middleware1, (req, res)=> { 
    console.log(req.dato1); 
    res.send({message:'hola'})
})

//Ejemplo middleware de manejo de errores
app.use((err,req,res,next) => {
    console.log(err.stack)
    res.status(500).send('Broken')
})

app.listen(8081, ()=> console.log('Server is running'))