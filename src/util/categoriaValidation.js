const { check } = require('express-validator')

exports.listarPorCategoriaId = [
    check('id')
        .exists().withMessage('O id não pode estar em Branco')
        .isInt().withMessage('O id deve ser um número Inteiro')
]
