const express = require('express')
const route = express.Router()
const categoriaController = require('../controllers/categoriaController')
const apiController = require('../controllers/apiController')
const categoriaValidation = require('../util/categoriaValidation')


route.get('/:id', apiController.verificar, categoriaValidation.listarPorCategoriaId, categoriaController.listarPorCategoriaId)


module.exports = route