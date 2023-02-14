import express from 'express';
 
const app = express();

const usuarios = [
    {id:1, nombre:"Mora", apellido:"Perez", edad:20, genero:'F'},
    {id:2, nombre:"Maria", apellido:"Suarez", edad:22, genero:'F'},
    {id:3, nombre:"Roberto", apellido:"Lopez", edad:24, genero:'M'}
]

//params 
app.get('/usuario/:id', (req, res) =>{
    const idUsuario = Number(req.params.id)
    const usuario = usuarios.find(u=>u.id===idUsuario)
    if(!usuario) return res.send({error: 'Usuario no encontrado'})
    res.send(usuario)
})

//query params

app.get ('/query/params', (req, res) => {
    const {genero, edad, id, nombre} = req.query;
    if (!genero || (genero!=='M' && genero!=='F')) return res.send(usuarios);
    const usuariosFiltrados = usuarios.filter(u=>u.genero === genero);
    res.send (usuariosFiltrados)
})
app.listen(8080,()=>console.log('Listening on port 8080'))
