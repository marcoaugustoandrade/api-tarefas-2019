const express = require('express')
const route = express.Router()
const tarefaController = require('../controllers/tarefaController')
const tarefaValidation = require('../util/tarefaValidation')
const apiController = require('../controllers/apiController')

route.get('/'           ,   apiController.verificar, tarefaController.listar)
route.post('/'          ,   apiController.verificar, tarefaValidation.inserir       ,  tarefaController.inserir)
route.put('/:id'        ,   apiController.verificar, tarefaValidation.alterar       ,  tarefaController.alterar)
route.delete('/:id'     ,   apiController.verificar, tarefaValidation.deletar       ,   tarefaController.deletar)
route.get('/:id'        ,   apiController.verificar, tarefaValidation.listarPorId   ,   tarefaController.listarPorId)

module.exports = route