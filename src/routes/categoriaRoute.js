const express = require('express')
const route = express.Router()
const categoriaController = require('../controllers/categoriaController')
const apiController = require('../controllers/apiController')
const categoriaValidation = require('../util/categoriaValidation')


route.get('/:id', apiController.verifica, categoriaValidation.listarPorId, categoriaController.listarPorId)

module.exports = route
