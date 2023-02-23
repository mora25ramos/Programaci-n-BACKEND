import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('views engine', 'handlebars');

const food = [ 
    {name: 'Pizza', price: 3000 },
    {name: 'Arroz', price: 200 },
    {name: 'Galletitas', price: 400},
    {name: 'Banana', price: 90}
];

app.get('/', (req,res)=>{
    const testUser = {
        name: 'Jorge',
        lastName: 'Perez',
        role: 'user'
    }

    res.render('index', {
        user: testUser,
        isAdmin: testUser.role === 'admin',
        food
    })
});

app.listen(8080, ()=> console.log('Listening server on port 8080'))