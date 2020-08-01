const express = require("express");
const router = express.Router();

const {
  getBootcamp,
  getBootcamps,
  createtBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

/**
*  para a rota '/' mapeada para  '/api/v1/bootcamps' 
*  mapei get e post para os metodos getBootcamps e createBootcamp
*/
router.route('/')
.get(getBootcamps)
.post(createtBootcamp);

router.route('/:id')
.get(getBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp);

module.exports = router;
