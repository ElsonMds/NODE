const express = require("express");
const dotenv = require("dotenv");
const bootcapms = require("./routes/bootcamps");
const logger    = require('./middlewares/logger');
///trazer as configuraçoes dotenv
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;
const morgan= require('morgan');


//inicializa o app com express
const app = express();



if(process.env.NODE_ENV==='development'){
    //console.log('++++++++++++++++++++++++++++')
    app.use(morgan('dev'));
}


//para toda requisicao ao ponto '/api/v1/bootcamps' delegue ao modulo bootcamps
app.use("/api/v1/bootcamps", bootcapms);

app.listen(PORT, () => {
  console.log(
    `Servidor rodando no modo ${process.env.NODE_ENV} na porta ${PORT}`
  );
});
