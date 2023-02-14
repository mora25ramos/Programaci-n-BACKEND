import express from 'express';

const app = express();

app.get ('/saludo', (req, res) => {
    res.send ('Hola a todos desde Express')
});

app.get ('/bienvenido', (req, res) => {
    res.send (`<h1 style="color:blue;">Hola Mundo</h1>`)
});

app.get ('/usuario', (req, res) => {
    res.send ({
        nombre: 'Mora',
        apellido: 'Ramos',
        edad: 20,
        correo: 'test@hotmail.com'
    });
});

app.listen(8090, () => console.log('Listening from port 8090'))