const express = require('express');
const dotenv = require('dotenv');


///trazer as configuraçoes dotenv
dotenv.config({path:'./config/config.env'});
const PORT = process.env.PORT || 5000;

//inicializa o app com express
const app= express();





app.listen(PORT,()=>{
    console.log(`Servidor rodando no modo ${process.env.NODE_ENV} na porta ${PORT}`);
})