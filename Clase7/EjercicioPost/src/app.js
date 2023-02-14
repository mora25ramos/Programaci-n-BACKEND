import express from 'express'

const app = express();

const users = [];

app.get('/api/users', (req,res)=>{
    res.send(users)
})

app.post('/api/users', (req,res)=>{
    const user = req.body
    if(!user.last_name || !user.first_name){
        return res.status(400).send({status:'error', message:'Incomplete values'})
    }

    users.push(user)
    res.send({status:'success', message:'User created'})
})

app.listen(8080,()=>console.log('Listening on port 8080'))