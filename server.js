const express = require('express');
const dotenv = require('dotenv');


///trazer as configuraçoes dotenv
dotenv.config({path:'./config/config.env'});
const PORT = process.env.PORT || 5000;

//inicializa o app com express
const app= express();

//importa as rotas
const bootcapms=require('./routes/bootcamps');

//monta as rotas na url /conecta as rotas com essa url
app.use('/api/v1/bootcamps',bootcapms);

app.listen(PORT,()=>{
    console.log(`Servidor rodando no modo ${process.env.NODE_ENV} na porta ${PORT}`);
})