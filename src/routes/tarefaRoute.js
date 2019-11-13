const express = require('express')
const route = express.Router()
const tarefaController = require('../controllers/tarefaController')
const tarefaValidation = require('../util/tarefaValidation')
const categoriaValidation = require('../util/categoriaValidation')
const categoriaController =  require('../controllers/categoriaController')
const apiController = require('../controllers/apiController')


route.get('/'           , tarefaController.listar)
route.post('/'          , tarefaValidation.inserir       ,  tarefaController.inserir)
route.put('/:id'        , tarefaValidation.alterar       ,  tarefaController.alterar)
route.delete('/:id'     , tarefaValidation.deletar       ,   tarefaController.deletar)
route.get('/:id'       ,  tarefaValidation.listarPorId   ,   tarefaController.listarPorId)

module.exports = route