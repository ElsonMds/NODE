const express = require("express");
const router = express.Router();

const {
  getBootcamp,
  getBootcamps,
  createtBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

/// quando chegar uma req GET para o ponto '/'
/// tratar com o controlador getBootcamps
router.route("/").get(getBootcamps).post(createtBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;

/*
//Cenario: Varias tipos de requisiçao
//a um mesmo ponto

app.get('/coisas/carros', (req,res)=>{
    //tratar/resolver requisição
})
app.post('/coisas/carros',(req,res)=>{
    //tratar/resolver requisiçao
})

///Possibilidade
//Combinar as rotas/pontos iguais
//encadear as requisições 
//usando o metodo route(pontoEmComum)

app.route('/coisas/carros')
.get((req,res)=>{})
.post((req,res)=>{})


///importa o arquivo/modulo things
const things = require('./routes/things');

app.use('/things',things);
//qualquer tipo de requisiçao que chegar para /things
//usar o modulo things


*/




