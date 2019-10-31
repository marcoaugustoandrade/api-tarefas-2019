const express = require('express')
const route = express.Router()
const tarefaController = require('../controllers/tarefaController')
const tarefaValidation = require('../util/tarefaValidation')
const categoriaValidation = require('../util/categoriaValidation')
const categoriaController =  require('../controllers/categoriaController')
const apiController = require('../controllers/apiController')


route.get('/desc/?',           apiController.verificar, tarefaValidation.listarPorDescricao, tarefaController.listarPorDescricao)
route.get('/pagination',  apiController.verificar, tarefaController.listarperpage)
route.get('/datas/:data?', apiController.verificar, tarefaValidation.listarPorDatas,tarefaController.listarPorDatas)
route.get('/',            apiController.verificar, tarefaController.listar)
route.get('/:id',         apiController.verificar, tarefaValidation.listarPorId ,tarefaController.listarPorId)
route.get('/data/?',      apiController.verificar, tarefaValidation.listarPorDt, tarefaController.listarPorDt)
route.post('/',           apiController.verificar, tarefaValidation.inserir, tarefaController.inserir)
route.put('/:id',         apiController.verificar, tarefaValidation.alterar ,tarefaController.alterar)
route.delete('/:id',      apiController.verificar, tarefaValidation.deletar, tarefaController.deletar)
route.get('/categ/:id',   apiController.verificar, categoriaValidation.listarPorCategoriaId,   categoriaController.listarPorCategoriaId)

module.exports = route