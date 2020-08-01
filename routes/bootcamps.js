const express = require('express');
const router = express.Router();





//rota - manipulador de rota
router.get('/',(req,res)=>{
    res.status(200).json({sucesso:true,msg:'mostrando todos os bootcamps'})
})

router.post('/',(req,res)=>{
    res.status(200).json({sucesso:true,msg:'criar novo bootcamps'})
})

router.put('/:id',(req,res)=>{
    res.status(200).json({sucesso:true,msg:`atualizar bootcamp ${req.params.id}`})
})


router.delete('/:id',(req,res)=>{
    res.status(200).json({sucesso:true,msg:`atualizar bootcamp ${req.params.id}`})
})


module.exports=router;