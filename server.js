const express = require('express');

const server = express();

//rotas
server.get('/',(req,res)=>{
    res.send('<h1>😌😶😎🏋️👎💅🎞🥅☪🟪🟦</h1>');
})


server.get('/sobre',(req,res)=>{
    res.send('<h1>👺🦁🐶🐳🦾👩🏼👩🏿</h1>');
})

server.get('/json',(req,res)=>{
    res.send({'nome':'Alcebíades'});
})

server.use((req,res)=>{
    //res.send('Deu erro!');
    res.status(404).send('Deu erro!');
})

server.listen(3000);