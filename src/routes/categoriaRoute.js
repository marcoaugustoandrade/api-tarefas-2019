const express = require('express')
const route = express.Router()
const categoriaController = require('../controllers/categoriaController')
const apiController = require('../controllers/apiController')
const categoriaValidation = require('../util/categoriaValidation')

route.put('/:id', apiController.verifica, categoriaValidation.alterar, categoriaController.alterar)

module.exports = route
