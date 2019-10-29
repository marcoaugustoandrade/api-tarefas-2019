const express = require('express')
const route = express.Router()
const tarefaController = require('../controllers/tarefaController')
const apiController = require('../controllers/apiController')
const tarefaValidation = require('../util/tarefaValidation')



route.get('/', apiController.verifica, tarefaController.listar)
route.get('/:id', apiController.verifica, tarefaController.listarPorId)
route.post('/', apiController.verifica, tarefaController.inserir)
route.put('/:id', apiController.verifica, tarefaController.alterar)
route.delete('/:id', apiController.verifica, tarefaController.deletar)
route.get('/data/:data?', apiController.verifica,tarefaValidation.listarPorDatas,tarefaController.listarPorDatas)

module.exports = route
