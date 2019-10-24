const express = require ('express')
const router = express.Router()
const categoriaController = require('../controllers/categoriaController')
const apiController = require('../controllers/apiController')
const categoriaValidation = require ('../util/categoriaValidation')

router.post('/',apiController.verifica,categoriaValidation.inserir,categoriaController.inserir)


module.exports = router