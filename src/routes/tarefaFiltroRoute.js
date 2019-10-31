const express = require('express')
const route = express.Router()
const tarefaController = require('../controllers/tarefaController')
const tarefaValidation = require('../util/tarefaValidation')
const apiController = require('../controllers/apiController')

route.get('/descri/?'       ,   apiController.verificar, tarefaValidation.listarPorDescricao, tarefaController.listarPorDescricao)
route.get('/datas/?'        ,   apiController.verificar, tarefaValidation.listarPorDatas    , tarefaController.listarPorDatas)
route.get('/data/?'         ,   apiController.verificar, tarefaValidation.listarPorDt       , tarefaController.listarPorDt)
route.get('/pagination/?'   ,   apiController.verificar, tarefaController.listarperpage)
route.get('/categ/:id',   apiController.verificar, categoriaValidation.listarPorCategoriaId,   categoriaController.listarPorCategoriaId)


module.exports = route