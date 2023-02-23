import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('views engine', 'handlebars');

const users = [ 
    {
        name: 'Jorge',
        lastName: 'Perez',
        age: 23,
        email: 'jorgeperez@gmail.com',
        phone: 1234567
    },
    {
        name: 'Julian',
        lastName: 'Alvarez',
        age: 21,
        email: 'julianalvarez@gmail.com',
        phone: 1010234
    },
    {
        name: 'Manuel',
        lastName: 'Garcia',
        age: 31,
        email: 'manuelgarcia@gmail.com',
        phone: 2311453
    },
    {
        name: 'Sofia',
        lastName: 'Lujan',
        age: 21,
        email: 'sofialujan@gmail.com',
        phone: 136723
    },
    {
        name: 'Juan',
        lastName: 'Perez',
        age: 18,
        email: 'juanperez@gmail.com',
        phone: 11223344
    }
];

app.get('/', (req,res)=>{
    //const testUser = {
        //name: 'Jorge',
        //lastName: 'Perez'
    //}

    //res.render('index', testUser)

    const random = Math.floor(Math.random()*users.length)
    res.render('users', { user:users[random] })
});

app.listen(8080, ()=> console.log('Listening server on port 8080'))
