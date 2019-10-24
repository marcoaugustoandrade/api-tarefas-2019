const express = require ('express')
const router = express.Router()
const categoriaController = require('../controllers/categoriaController')
const apiController = require('../controllers/apiController')

router.post('/',apiController.verifica,categoriaController.inserir)


module.exports = router