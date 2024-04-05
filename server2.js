// Abrir arquivos de html, respostas no server com arquivos
const express = require('express');
const server2 = express();

server2.listen(3000);

// Definindo as rotas

/*
Principal
Serviços
Contato
404
*/

// Escrevendo as rotas
server2.get('/principal',(req,res)=>{
    res.sendFile('./html/principal.html',{root:__dirname});
})

server2.get('/servicos',(req,res)=>{
    res.sendFile('./html/servicos.html',{root:__dirname});
})

server2.get('/contato',(req,res)=>{
    res.sendFile('./html/contato.html',{root:__dirname});
})

server2.use((req,res)=>{
    res.status(404).sendFile('./html/404.html',{root:__dirname});
})

