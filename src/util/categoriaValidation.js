const { check } = require('express-validator')

exports.listarPorCategoriaId = [
    check('id')
        .exists().withMessage('O id não pode estar em Branco')
        .isInt().withMessage('O id deve ser um número Inteiro')
]
exports.alterar = [
  check('id')
  .exists().isLength({min:1}).withMessage('O id não pode estar em branco')
  .isInt().withMessage('O id deve ser um número inteiro'),
  check('descricao').exists().trim().isLength({min:1}).withMessage('A descrição não pode estar em branco')
]


