const express = require('express')
const route = express.Router()
const categoriaController = require('../controllers/categoriaController')
const apiController = require('../controllers/apiController')
const categoriaValidation = require('../util/categoriaValidation')


route.delete('/:id', apiController.verifica, categoriaValidation.deletar, categoriaController.deletar)
route.get('/:desc', apiController.verifica,categoriaValidation.listarPorDesc, categoriaController.listarPorDesc)
route.get('/:id', apiController.verifica, categoriaValidation.listarPorId, categoriaController.listarPorId)
route.post('/',apiController.verifica,categoriaValidation.inserir,categoriaController.inserir)

module.exports = route