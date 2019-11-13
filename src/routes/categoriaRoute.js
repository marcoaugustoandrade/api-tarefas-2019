const express = require('express')
const route = express.Router()
const categoriaController = require('../controllers/categoriaController')
const apiController = require('../controllers/apiController')
const categoriaValidation = require('../util/categoriaValidation')


route.put('/:id',           categoriaValidation.alterar,                categoriaController.alterar)
route.delete('/:id',        categoriaValidation.deletar,                categoriaController.deletar)
route.get('/:id',           categoriaValidation.listarPorId,            categoriaController.listarPorId)
route.post('/',             categoriaValidation.inserir,                categoriaController.inserir)
route.get('/',              categoriaController.listar)

module.exports = route

