const express = require('express');
const dotenv = require('dotenv');


///trazer as configuraçoes dotenv
dotenv.config({path:'./config/config.env'});
const PORT = process.env.PORT || 5000;

//inicializa o app com express
const app= express();

//ROTAS


//rota - manipulador de rota
app.get('/api/v1/bootcamps',(req,res)=>{
    res.status(200).json({sucesso:true,msg:'mostrando todos os bootcamps'})
})

app.post('/api/v1/bootcamps',(req,res)=>{
    res.status(200).json({sucesso:true,msg:'criar novo bootcamps'})
})

app.put('/api/v1/bootcamps/:id',(req,res)=>{
    res.status(200).json({sucesso:true,msg:`atualizar bootcamp ${req.params.id}`})
})


app.delete('/api/v1/bootcamps/:id',(req,res)=>{
    res.status(200).json({sucesso:true,msg:`atualizar bootcamp ${req.params.id}`})
})


app.listen(PORT,()=>{
    console.log(`Servidor rodando no modo ${process.env.NODE_ENV} na porta ${PORT}`);
})